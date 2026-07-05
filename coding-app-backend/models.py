from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from database import Base
from datetime import datetime

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(100), nullable=False)
    grade = Column(String(50), nullable=False)
    password = Column(String(255), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    scores = relationship("Score", back_populates="user")

class Lesson(Base):
    __tablename__ = "lessons"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    description = Column(Text)
    youtube_url = Column(String(255))
    order = Column(Integer)

    quizzes = relationship("Quiz", back_populates="lesson")
    scores = relationship("Score", back_populates="lesson")

class Quiz(Base):
    __tablename__ = "quizzes"

    id = Column(Integer, primary_key=True, index=True)
    lesson_id = Column(Integer, ForeignKey("lessons.id"))
    question = Column(Text, nullable=False)
    choice_a = Column(String(255))
    choice_b = Column(String(255))
    choice_c = Column(String(255))
    choice_d = Column(String(255))
    answer = Column(String(1), nullable=False)

    lesson = relationship("Lesson", back_populates="quizzes")

class Score(Base):
    __tablename__ = "scores"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    lesson_id = Column(Integer, ForeignKey("lessons.id"))
    quiz_score = Column(Integer, default=0)        # คะแนนปรนัย
    code_score = Column(Integer, default=0)         # คะแนนเขียนโค้ด
    fillblock_score = Column(Integer, default=0)    # คะแนนมินิเกม
    total_score = Column(Integer, default=0)        # คะแนนรวม
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    user = relationship("User", back_populates="scores")
    lesson = relationship("Lesson", back_populates="scores")

class FillInBlock(Base):
    __tablename__ = "fill_in_blocks"

    id = Column(Integer, primary_key=True, index=True)
    lesson_id = Column(Integer, ForeignKey("lessons.id"))
    question = Column(Text, nullable=False)
    code_template = Column(Text, nullable=False)
    choices = Column(Text, nullable=False)
    answer = Column(Text, nullable=False)
    order = Column(Integer)