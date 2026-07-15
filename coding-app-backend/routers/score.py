from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import Score, User, Lesson
from pydantic import BaseModel

router = APIRouter(prefix="/score", tags=["score"])

# Schema สำหรับอัพเดตคะแนนแต่ละประเภท
class UpdateQuizScoreSchema(BaseModel):
    user_id: int
    lesson_id: int
    quiz_score: int

class UpdateCodeScoreSchema(BaseModel):
    user_id: int
    lesson_id: int
    code_score: int

class UpdateFillBlockScoreSchema(BaseModel):
    user_id: int
    lesson_id: int
    fillblock_score: int


# ฟังก์ชันช่วย - หาหรือสร้าง Score record ของ user + lesson นั้น
def get_or_create_score(db: Session, user_id: int, lesson_id: int):
    score = db.query(Score).filter(
        Score.user_id == user_id,
        Score.lesson_id == lesson_id
    ).first()

    if not score:
        score = Score(user_id=user_id, lesson_id=lesson_id)
        db.add(score)
        db.commit()
        db.refresh(score)

    return score


# ฟังก์ชันช่วย - คำนวณคะแนนรวมใหม่
def recalculate_total(score: Score, db: Session):
    score.total_score = score.quiz_score + score.code_score + score.fillblock_score
    db.commit()
    db.refresh(score)
    return score


# บันทึกคะแนนปรนัย (เรียกจาก quiz.py หลังตรวจคำตอบ)
@router.post("/update-quiz")
def update_quiz_score(body: UpdateQuizScoreSchema, db: Session = Depends(get_db)):
    score = get_or_create_score(db, body.user_id, body.lesson_id)
    score.quiz_score = body.quiz_score
    score = recalculate_total(score, db)
    return {"message": "บันทึกคะแนนปรนัยแล้ว", "total_score": score.total_score}


# บันทึกคะแนนเขียนโค้ด (เรียกจาก code.py หลังตรวจโค้ดถูก)
@router.post("/update-code")
def update_code_score(body: UpdateCodeScoreSchema, db: Session = Depends(get_db)):
    score = get_or_create_score(db, body.user_id, body.lesson_id)
    score.code_score = body.code_score
    score = recalculate_total(score, db)
    return {"message": "บันทึกคะแนนเขียนโค้ดแล้ว", "total_score": score.total_score}


# บันทึกคะแนนมินิเกม Fill-in-block
@router.post("/update-fillblock")
def update_fillblock_score(body: UpdateFillBlockScoreSchema, db: Session = Depends(get_db)):
    score = get_or_create_score(db, body.user_id, body.lesson_id)
    score.fillblock_score = body.fillblock_score
    score = recalculate_total(score, db)
    return {"message": "บันทึกคะแนนมินิเกมแล้ว", "total_score": score.total_score}


# ดูคะแนนของตัวเองรายบทเรียน
@router.get("/user/{user_id}")
def get_user_scores(user_id: int, db: Session = Depends(get_db)):
    scores = db.query(Score).filter(Score.user_id == user_id).all()
    
    result = []
    for s in scores:
        result.append({
            "lesson_id": s.lesson_id,
            "quiz_score": s.quiz_score,
            "code_score": s.code_score,
            "fillblock_score": s.fillblock_score,
            "total_score": s.total_score
        })
    return result


# ดูคะแนนรวมทั้งหมดของ user (ทุกบทรวมกัน)
@router.get("/user/{user_id}/summary")
def get_user_summary(user_id: int, db: Session = Depends(get_db)):
    scores = db.query(Score).filter(Score.user_id == user_id).all()
    
    total_quiz = sum(s.quiz_score for s in scores)
    total_code = sum(s.code_score for s in scores)
    total_fillblock = sum(s.fillblock_score for s in scores)
    grand_total = total_quiz + total_code + total_fillblock

    return {
        "total_quiz_score": total_quiz,
        "total_code_score": total_code,
        "total_fillblock_score": total_fillblock,
        "grand_total": grand_total
    }


# กระดานอันดับ (Leaderboard)
@router.get("/leaderboard")
def get_leaderboard(db: Session = Depends(get_db)):
    users = db.query(User).all()
    
    leaderboard = []
    for user in users:
        scores = db.query(Score).filter(Score.user_id == user.id).all()
        grand_total = sum(s.total_score for s in scores)
        leaderboard.append({
            "user_id": user.id,
            "full_name": user.full_name,
            "grade": user.grade,
            "total_score": grand_total
        })
    
    # เรียงคะแนนมากไปน้อย
    leaderboard.sort(key=lambda x: x["total_score"], reverse=True)
    
    return leaderboard

# นับจำนวนบทเรียนที่มีการบันทึกคะแนนแล้ว (ถือว่าเรียน+ทำแบบฝึกหัดจบแล้ว)
@router.get("/user/{user_id}/progress")
def get_user_progress(user_id: int, db: Session = Depends(get_db)):
    scores = db.query(Score).filter(Score.user_id == user_id).all()
    completed_lesson_ids = [s.lesson_id for s in scores]

    return {
        "completed_count": len(completed_lesson_ids),
        "completed_lesson_ids": completed_lesson_ids
    }