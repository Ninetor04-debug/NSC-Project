from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import google.generativeai as genai

router = APIRouter(prefix="/hint", tags=["hint"])

# ตั้งค่า Gemini API Key
GEMINI_API_KEY = "AQ.Ab8RN6KfCNBB2X1WndyEDKDy2aXBh4wv27SYgObZtfvor0k2RQ"
genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")

class HintSchema(BaseModel):
    question: str       # โจทย์ที่นักเรียนกำลังทำ
    code: str            # โค้ดของนักเรียน
    error: str = ""       # ข้อความ Error (ถ้ามี)

@router.post("/")
def get_hint(body: HintSchema):
    prompt = f"""
คุณเป็นผู้ช่วยสอน Python ให้นักเรียนมัธยม

โจทย์: {body.question}

โค้ดของนักเรียน:
{body.code}

ข้อผิดพลาดที่พบ: {body.error if body.error else "ไม่มี Error แต่ผลลัพธ์อาจไม่ถูกต้อง"}

กรุณาช่วยแนะนำนักเรียนโดย:
- อย่าบอกคำตอบที่ถูกต้องตรงๆ
- บอกแค่ว่าปัญหาอยู่บริเวณไหน และควรลองปรับอะไร
- ตอบเป็นภาษาไทย กระชับ ไม่เกิน 3 ประโยค
- ใช้น้ำเสียงให้กำลังใจ ไม่ตำหนิ
"""

    try:
        response = model.generate_content(prompt)
        return {"hint": response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"เกิดข้อผิดพลาดในการเรียก AI: {str(e)}")