import secrets
from datetime import datetime, UTC, timedelta
from app.models.OTP_codes import OTP
from sqlalchemy.orm import Session
from app.utils.email import send_email
from fastapi import HTTPException

def send_otp(email: str,purpose: str, db: Session):
    otp = f"{secrets.randbelow(1000000):06d}"
    expiry_time = datetime.now(UTC) + timedelta(minutes=5)
    existing_otp = db.query(OTP).filter(OTP.email == email, OTP.purpose == purpose).first()
    if existing_otp:
        existing_otp.otp_code = otp
        existing_otp.expires_at = expiry_time
    else:
        otp_entry = OTP(email=email, otp_code=otp, purpose=purpose, expires_at=expiry_time)
        db.add(otp_entry)
    try:
        send_email(email, subject=f"Placementor AI OTP for {purpose}", 
                   body=f"""Hello,

                        Your OTP for PlaceMentor AI is: {otp}

                        This OTP is valid for 5 minutes.

                        If you didn't request this, please ignore this email.

                        Regards,
                        PlaceMentor AI Team
                        """)
        db.commit()
    except Exception:
        db.rollback()
        raise HTTPException(
            status_code=500,
            detail="Failed to send OTP email"
        )