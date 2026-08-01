from sqlalchemy import Column, Integer, String, DateTime, func
from app.database.database import Base

class Registration(Base):
    __tablename__ = "pending_registrations"

    id = Column(Integer, primary_key=True, index=True)

    full_name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    college_name = Column(String, nullable=False)
    branch = Column(String, nullable=False)
    course = Column(String, nullable=False)
    passout_year = Column(Integer, nullable=False)
    hash_password = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), nullable=False, server_default=func.now())
    updated_at = Column(DateTime(timezone=True), nullable=False, server_default=func.now(), onupdate=func.now())