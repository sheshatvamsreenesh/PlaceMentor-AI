from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.database import Base, engine
from app.models.user import User
from app.routes.auth import router as auth_router
from app.routes.limiter import limiter




# Create all tables
Base.metadata.create_all(bind=engine)

app = FastAPI()


app.state.limiter = limiter

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(auth_router)