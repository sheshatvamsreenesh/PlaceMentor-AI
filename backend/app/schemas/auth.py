from pydantic import BaseModel

class LoginRequest(BaseModel):
    email: str
    password: str
class RegisterRequest(BaseModel):
    full_name: str
    email: str
    college_name: str
    branch: str
    passout_year: int
    password: str
    confirm_password: str
