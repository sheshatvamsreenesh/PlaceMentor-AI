from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, Request, HTTPException
from app.database.database import SessionLocal
from app.models.user import User
from app.models.OTP_codes import OTP
from app.models.pending_registrations import Registration
from app.schemas.auth import LoginRequest, RegisterRequest
from app.routes.limiter import limiter
from app.utils.security import hash_password
from app.utils.otp import send_otp
from datetime import datetime, UTC, timedelta

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
        existing_registration.full_name = user.full_name
        existing_registration.college_name = user.college_name
        existing_registration.branch = user.branch
        existing_registration.course = user.course
        existing_registration.passout_year = user.passout_year
        existing_registration.hash_password = hashed_password
        db.commit()
    else:
        new_registration = Registration(
            full_name=user.full_name,
            email=user.email,
            college_name=user.college_name,
            branch=user.branch,
            course=user.course,
            passout_year=user.passout_year,
            hash_password=hashed_password
        )
        db.add(new_registration)
        db.commit()
        send_otp(user.email, "registration", db)
    




    