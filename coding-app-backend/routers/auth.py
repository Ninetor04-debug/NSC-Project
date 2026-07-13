import token

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import User
from passlib.context import CryptContext
from jose import jwt
from datetime import datetime, timedelta
from pydantic import BaseModel

router = APIRouter(prefix="/auth", tags=["auth"])

SECRET_KEY = "your-secret-key-changeme"
ALGORITHM = "HS256"
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Schema Register
class RegisterSchema(BaseModel):
    full_name: str
    grade: str
    password: str
    confirm_password: str

# Schema Login
class LoginSchema(BaseModel):
    full_name: str
    password: str

# ฟังก์ชันช่วย
def hash_password(password: str):
    return pwd_context.hash(password)

def verify_password(plain: str, hashed: str):
    return pwd_context.verify(plain, hashed)

def create_token(data: dict):
    expire = datetime.utcnow() + timedelta(hours=24)
    data.update({"exp": expire})
    return jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM)

# Register
@router.post("/register")
def register(body: RegisterSchema, db: Session = Depends(get_db)):
    # เช็คว่ารหัสผ่านตรงกันมั้ย
    if body.password != body.confirm_password:
        raise HTTPException(status_code=400, detail="รหัสผ่านไม่ตรงกัน")
    
    # เช็คว่าชื่อซ้ำมั้ย
    existing = db.query(User).filter(User.full_name == body.full_name).first()
    if existing:
        raise HTTPException(status_code=400, detail="ชื่อนี้ถูกใช้งานแล้ว")

    new_user = User(
        full_name=body.full_name,
        grade=body.grade,
        password=hash_password(body.password)
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {"message": "สมัครสมาชิกสำเร็จ"}

# Login
@router.post("/login")
def login(body: LoginSchema, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.full_name == body.full_name).first()
    if not user or not verify_password(body.password, user.password):
        raise HTTPException(status_code=401, detail="ชื่อหรือรหัสผ่านไม่ถูกต้อง")

    token = create_token({"sub": str(user.id), "full_name": user.full_name})
    return {
    "access_token": token,
    "token_type": "bearer",
    "user_id": user.id,
    "full_name": user.full_name,
    "grade": user.grade
    }