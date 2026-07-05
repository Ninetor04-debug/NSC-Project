from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine
import models
from routers import auth, lessons, code, quiz, score, hint

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(lessons.router)
app.include_router(code.router)
app.include_router(quiz.router)
app.include_router(score.router)
app.include_router(hint.router)

@app.get("/")
def root():
    return {"message": "Backend พร้อมใช้งานแล้วครับ"}