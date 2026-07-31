from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends
from app.database.database import SessionLocal
from app.models.user import User
from app.schemas.auth import LoginRequest, RegisterRequest

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
def login(user: LoginRequest):
    print(user.email)
    print(user.password)

    return {"message": "Login successful"}

@router.post("/register")
def register(user: RegisterRequest, db: Session = Depends(get_db)):

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