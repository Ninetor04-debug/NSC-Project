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

ข้อผิดพลาดที่พบ: {body.error if body.error else "ไม่มี Error"}

ก่อนอื่นให้พิจารณาว่าโค้ดนี้ทำงานถูกต้องตามโจทย์แล้วหรือยัง

ถ้าโค้ดถูกต้องและสมบูรณ์แล้ว:
- ตอบแค่ว่า "ถูกต้องแล้วครับ เขียนได้ดีมาก!" หรือประโยคทำนองนี้สั้นๆ
- ห้ามแนะนำให้ปรับปรุงเพิ่มเติมใดๆ ทั้งสิ้น แม้จะทำให้ดีขึ้นได้ก็ตาม

ถ้าโค้ดยังผิดหรือไม่สมบูรณ์:
- บอกว่าปัญหาอยู่บริเวณไหน และควรลองปรับอะไร
- ห้ามบอกคำตอบที่ถูกต้องตรงๆ
- ตอบไม่เกิน 3 ประโยค

ตอบเป็นภาษาไทย น้ำเสียงให้กำลังใจ
"""

    try:
        response = model.generate_content(prompt)
        return {"hint": response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"เกิดข้อผิดพลาดในการเรียก AI: {str(e)}")