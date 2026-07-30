from fastapi import APIRouter
from app.schemas.auth import LoginRequest, RegisterRequest

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
def register(user: RegisterRequest):
    print(user.full_name)
    print(user.email)
    print(user.college_name)
    print(user.branch)
    print(user.passout_year)
    print(user.password)
    print(user.confirm_password)

    return {"message": "Registration successful"}