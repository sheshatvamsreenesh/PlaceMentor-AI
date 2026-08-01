from sqlalchemy import Column, Integer, String, DateTime
from app.database.database import Base
from datetime import datetime, UTC

class OTP(Base):
    __tablename__ = "otp_codes"

    id = Column(Integer, primary_key=True, index=True)

    email = Column(String, nullable=False)
    otp_code = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), nullable=False, default=datetime.now(UTC))
    expires_at = Column(DateTime(timezone=True), nullable=False)