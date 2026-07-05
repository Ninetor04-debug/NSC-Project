from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import Quiz, Score
from pydantic import BaseModel
from typing import List
import httpx

router = APIRouter(prefix="/quiz", tags=["quiz"])

# Schema
class AnswerSchema(BaseModel):
    quiz_id: int
    answer: str

class SubmitQuizSchema(BaseModel):
    lesson_id: int
    user_id: int
    answers: List[AnswerSchema]

# ดึงโจทย์ปรนัยของบทเรียนนั้น
@router.get("/{lesson_id}")
def get_quiz(lesson_id: int, db: Session = Depends(get_db)):
    quizzes = db.query(Quiz).filter(Quiz.lesson_id == lesson_id).all()
    if not quizzes:
        raise HTTPException(status_code=404, detail="ไม่พบโจทย์ของบทเรียนนี้")
    
    # ไม่ส่ง answer กลับไปให้ Frontend เห็น
    result = []
    for q in quizzes:
        result.append({
            "id": q.id,
            "question": q.question,
            "choice_a": q.choice_a,
            "choice_b": q.choice_b,
            "choice_c": q.choice_c,
            "choice_d": q.choice_d
        })
    return result

# ส่งคำตอบและคำนวณคะแนน
@router.post("/submit")
def submit_quiz(body: SubmitQuizSchema, db: Session = Depends(get_db)):
    total = 0
    correct = 0

    for ans in body.answers:
        quiz = db.query(Quiz).filter(Quiz.id == ans.quiz_id).first()
        if quiz:
            total += 1
            if quiz.answer.lower() == ans.answer.lower():
                correct += 1

    score_value = int((correct / total) * 100) if total > 0 else 0

 # เรียก score.py ให้บันทึกคะแนนอัตโนมัติ
    from models import Score
    score_record = db.query(Score).filter(
        Score.user_id == body.user_id,
        Score.lesson_id == body.lesson_id
    ).first()

    if not score_record:
        score_record = Score(
            user_id=body.user_id,
            lesson_id=body.lesson_id,
            quiz_score=0,
            code_score=0,
            fillblock_score=0,
            total_score=0
        )
        db.add(score_record)

        score_record.quiz_score = score_value
        score_record.total_score = (
        score_record.quiz_score + score_record.code_score + score_record.fillblock_score
        )
        db.commit()

    return {
        "total": total,
        "correct": correct,
        "score": score_value,
        "message": f"ได้คะแนน {correct}/{total} ({score_value} คะแนน)"
    }