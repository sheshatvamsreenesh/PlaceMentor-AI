from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, Request
from app.database.database import SessionLocal
from app.models.user import User
from app.schemas.auth import LoginRequest, RegisterRequest
from app.routes.limiter import limiter

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

    new_user = User(
        full_name=user.full_name,
        email=user.email,
        college_name=user.college_name,
        branch=user.branch,
        passout_year=user.passout_year,
        password=user.password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message": "Registration successful"}