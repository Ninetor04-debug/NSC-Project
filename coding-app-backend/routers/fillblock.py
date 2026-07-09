from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import FillInBlock, Score
from pydantic import BaseModel
from typing import List
import json

router = APIRouter(prefix="/fillblock", tags=["fillblock"])

# Schema สำหรับส่งคำตอบ
class SubmitFillBlockSchema(BaseModel):
    fillblock_id: int
    user_id: int
    lesson_id: int
    answers: List[str]   # คำตอบที่ผู้เรียนลากมาวางตามลำดับ


# ดึงโจทย์ Fill-in-block ของบทเรียนนั้น
@router.get("/{lesson_id}")
def get_fillblocks(lesson_id: int, db: Session = Depends(get_db)):
    blocks = db.query(FillInBlock).filter(
        FillInBlock.lesson_id == lesson_id
    ).order_by(FillInBlock.order).all()

    if not blocks:
        raise HTTPException(status_code=404, detail="ไม่พบโจทย์มินิเกมของบทเรียนนี้")

    result = []
    for b in blocks:
        result.append({
            "id": b.id,
            "question": b.question,
            "code_template": b.code_template,
            "choices": json.loads(b.choices)   # แปลง JSON string เป็น list
            # ไม่ส่ง answer กลับไปให้ Frontend เห็น
        })
    return result


# ส่งคำตอบและตรวจ
@router.post("/submit")
def submit_fillblock(body: SubmitFillBlockSchema, db: Session = Depends(get_db)):
    block = db.query(FillInBlock).filter(FillInBlock.id == body.fillblock_id).first()
    
    if not block:
        raise HTTPException(status_code=404, detail="ไม่พบโจทย์นี้")

    correct_answer = json.loads(block.answer)   # แปลง JSON string เป็น list

    # เช็คว่าคำตอบตรงกันทุกช่องไหม
    is_correct = body.answers == correct_answer
    score_value = 100 if is_correct else 0

    # บันทึกคะแนนลง Score (รวมกับคะแนนอื่น)
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

    score_record.fillblock_score = score_value
    score_record.total_score = (
        score_record.quiz_score + score_record.code_score + score_record.fillblock_score
    )
    db.commit()

    return {
        "is_correct": is_correct,
        "score": score_value,
        "message": "ถูกต้องแล้วครับ!" if is_correct else "ยังไม่ถูกต้อง ลองใหม่อีกครั้งนะครับ"
    }