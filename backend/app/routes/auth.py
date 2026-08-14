
from urllib import response

from sqlalchemy import func
from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, Request, HTTPException, Response
from app.database.database import SessionLocal
from app.models.user import User
from app.models.OTP_codes import OTP
from app.models.pending_registrations import Registration
from app.schemas.auth import LoginRequest, RegisterRequest, SendOTPRequest, VerifyOTPRequest
from app.routes.limiter import limiter
from app.utils.security import hash_password
from app.utils.otp import send_otp
from app.utils.jwt import create_access_token, create_refresh_token, verify_token
from datetime import datetime, UTC, timedelta, timezone

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/login")
@limiter.limit("5/minute")  # Limit to 5 requests per minute
def login(request: Request, user: LoginRequest):
    print(user.email)
    print(user.password)

    return {"message": "Login successful"}

@router.post("/register")
@limiter.limit("3/minute")  # Limit to 3 requests per minute
def register(
    request: Request,
    user: RegisterRequest,
    db: Session = Depends(get_db)
):
    existing_user = db.query(User).filter(User.email == user.email).first()
    existing_registration = db.query(Registration).filter(Registration.email == user.email).first()

    
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed_password = hash_password(user.password)
    if existing_registration:
        existing_registration.full_name = user.fullName
        existing_registration.college_name = user.collegeName
        existing_registration.branch = user.branch
        existing_registration.course = user.course
        existing_registration.passout_year = user.passoutYear
        existing_registration.hash_password = hashed_password
        
    else:
        new_registration = Registration(
            full_name=user.fullName,
            email=user.email,
            college_name=user.collegeName,
            branch=user.branch,
            course=user.course,
            passout_year=user.passoutYear,
            hash_password=hashed_password
        )
        db.add(new_registration)

    db.commit()
    send_otp(user.email, "registration", db)
    return {"message": "OTP Sent Successfully"}

@router.post("/send-otp")
@limiter.limit("2/minute") 
def send_otp_route(request: Request, otp_request: SendOTPRequest, db: Session = Depends(get_db)):
    registration = db.query(Registration).filter(
    Registration.email == otp_request.email
    ).first()
    if not registration:
        raise HTTPException(
            status_code=404,
            detail="No pending registration found for this email."
        )
    registration.updated_at = func.now()
    db.commit()
    send_otp(otp_request.email, "registration", db)
    return {"message": "OTP Sent Successfully"}

@router.post("/verify-otp")
@limiter.limit("5/minute")  # Limit to 5 requests per minute
def verify_otp(response: Response, request: Request, otp_request: VerifyOTPRequest, db: Session = Depends(get_db)):
    otp_record = db.query(OTP).filter(
        OTP.email == request.email,
        OTP.purpose == "registration"
    ).first()

    if not otp_record:
        raise HTTPException(
            status_code=400,
            detail="Invalid or expired OTP."
        )

    now = datetime.now(timezone.utc)

    if otp_record.expires_at < now:
        raise HTTPException(
            status_code=400,
            detail="OTP has expired. Please request a new one."
        )
    if otp_record.otp_code != request.otp:
        raise HTTPException(
            status_code=400,
            detail="Invalid OTP."
        )
    registration = db.query(Registration).filter(
        Registration.email == request.email
    ).first()

    if not registration:
        raise HTTPException(
            status_code=404,
            detail="Pending registration not found."
        )
    existing_user = db.query(User).filter(
        User.email == request.email
    ).first()

    if existing_user:
        raise HTTPException(
            status_code=409,
            detail="An account with this email already exists."
        )
    user = User(
        full_name=registration.full_name,
        email=registration.email,
        college_name=registration.college_name,
        branch=registration.branch,
        course=registration.course,
        passout_year=registration.passout_year,
        hash_password=registration.hash_password,
    )
    db.add(user)
    db.flush()  # Ensure the user is added before deletion
    db.delete(registration)
    db.delete(otp_record)
    db.commit()
    access_token = create_access_token(user.id)
    refresh_token = create_refresh_token(user.id)
    response.set_cookie(
    key="access_token",
    value=access_token,
    httponly=True,
    secure=False,      # True in production with HTTPS
    samesite="lax",
    max_age=30 * 60,
    )
    response.set_cookie(
        key="refresh_token",
        value=refresh_token,
        httponly=True,
        secure=False,      # True in production with HTTPS
        samesite="lax",
        max_age=7 * 24 * 60 * 60,
    )
    return {
        "message": "OTP verified and user registered successfully.",
    }

