import smtplib

from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

import os
from dotenv import load_dotenv
from sqlalchemy.orm import Session

load_dotenv()


def send_email(to_email: str, subject: str, body: str):
    EMail = os.getenv("EMAIL")
    EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")

    message = MIMEMultipart()

    message["From"] = EMail
    message["To"] = to_email
    message["Subject"] = subject

    message.attach(MIMEText(body, "plain"))


    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls()

        server.login(
            EMail, EMAIL_PASSWORD
        )

        server.send_message(message)

