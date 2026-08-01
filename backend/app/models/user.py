from sqlalchemy import Column, Integer, String
from app.database.database import Base
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    full_name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    college_name = Column(String, nullable=False)
    branch = Column(String, nullable=False)
    course = Column(String, nullable=False)
    passout_year = Column(Integer, nullable=False)
    hash_password = Column(String, nullable=False)