from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models import Lesson

router = APIRouter(prefix="/lessons", tags=["lessons"])

@router.get("/")
def get_lessons(db: Session = Depends(get_db)):
    lessons = db.query(Lesson).order_by(Lesson.order).all()
    return lessons

@router.get("/{lesson_id}")
def get_lesson(lesson_id: int, db: Session = Depends(get_db)):
    lesson = db.query(Lesson).filter(Lesson.id == lesson_id).first()
    if not lesson:
        return {"message": "ไม่พบบทเรียนนี้"}
    return lesson