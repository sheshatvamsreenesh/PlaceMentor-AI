from pydantic import BaseModel

class LoginRequest(BaseModel):
    email: str
    password: str

from pydantic import BaseModel, EmailStr, Field, field_validator


class RegisterRequest(BaseModel):
    fullName: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    collegeName: str = Field(..., min_length=2, max_length=150)
    branch: str
    course: str = Field(..., min_length=2, max_length=100)
    passoutYear: int
    password: str = Field(..., min_length=8)
    confirmPassword: str

    @field_validator("fullName", "collegeName", "branch", "course")
    @classmethod
    def cannot_be_blank(cls, value: str):
        if not value.strip():
            raise ValueError("Field cannot be empty")
        return value

    @field_validator("passoutYear")
    @classmethod
    def validate_year(cls, value: int):
        if value < 2024 or value > 2035:
            raise ValueError("Invalid passout year")
        return value

    @field_validator("confirmPassword")
    @classmethod
    def passwords_match(cls, value, info):
        password = info.data.get("password")

        if password and value != password:
            raise ValueError("Passwords do not match")

        return value

class SendOTPRequest(BaseModel):
    email: EmailStr

class VerifyOTPRequest(BaseModel):
    email: EmailStr
    otp: str
    purpose: str


class VerifyOTPResponse(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"