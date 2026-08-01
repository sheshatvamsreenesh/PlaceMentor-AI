import secrets
from datetime import datetime, UTC, timedelta
from app.models.OTP_codes import OTP

def send_otp(email: str,purpose: str, db):
    otp = f"{secrets.randbelow(1000000):06d}"
    expiry_time = datetime.now(UTC) + timedelta(minutes=5)
    existing_otp = db.query(OTP).filter(OTP.email == email, OTP.purpose == purpose).first()
    if existing_otp:
        existing_otp.otp_code = otp
        existing_otp.expires_at = expiry_time
    else:
        otp_entry = OTP(email=email, otp_code=otp, purpose=purpose, expires_at=expiry_time)
        db.add(otp_entry)
    db.commit()
    