import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { lessons } from "../data/lessonsData";
import { useProgress } from "../context/ProgressContext";
import { submitQuizScore, submitFillScore } from "../scoreApi";
import QuizChoice from "./QuizChoice";
import PythonSyntaxQuiz from "./PythonSyntaxQuiz";
import "./Result.css";

function ExerciseRunner() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const userId = localStorage.getItem("user_id");

  const { addCompletedExercise, refreshProgress } = useProgress();

  const lesson = lessons.find((l) => l.id === Number(lessonId));

  if (!lesson) {
    return <h2>ไม่พบบทเรียน</h2>;
  }

  // ---------- โจทย์แบบ Fill-in-blank ----------
  if (lesson.exerciseType === "fill") {
    return (
      <PythonSyntaxQuiz
        lesson={lesson}
        onBack={() => navigate("/dashboard")}
        onFinish={async (finalScore, total) => {
          lesson.exercises.forEach((ex) => {
            const exerciseKey = `${lesson.id}-${ex.id}`;
            addCompletedExercise(exerciseKey);
          });

          try {
            await submitFillScore(lesson.id, userId, finalScore, total);
            await refreshProgress();
          } catch (err) {
            console.error("ส่งคะแนน fill-in-blank ไม่สำเร็จ", err);
          }
        }}
      />
    );
  }

  // ---------- โจทย์แบบ Choice (ปรนัย) พร้อม arrow nav + hint ----------
  const exercises = lesson.exercises || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentExercise = exercises[currentIndex];

  if (!currentExercise) {
    return <h2>บทนี้ยังไม่มีแบบฝึกหัด</h2>;
  }

  async function handleNext({ selected, correct }) {
    const exerciseKey = `${lesson.id}-${currentExercise.id}`;
    addCompletedExercise(exerciseKey);

    const answerLetter = ["a", "b", "c", "d"][selected];
    const newAnswers = [
      ...selectedAnswers,
      { quiz_id: currentExercise.id, answer: answerLetter },
    ];
    setSelectedAnswers(newAnswers);

    let newScore = score;
    if (correct) {
      newScore++;
      setScore(newScore);
    }

    if (currentIndex < exercises.length - 1) {
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 700);
    } else {
      try {
        await submitQuizScore(lesson.id, userId, newAnswers);
        await refreshProgress();
      } catch (err) {
        console.error("ส่งคะแนน quiz ไม่สำเร็จ", err);
      } finally {
        setFinished(true);
      }
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  function handleArrowNext() {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }

  if (finished) {
    const percent = Math.round((score / exercises.length) * 100);

    let message = "";
    if (percent === 100) {
      message = "ยอดเยี่ยม! คุณได้คะแนนเต็ม";
    } else if (percent >= 80) {
      message = "เก่งมาก! ทำได้ดีมาก";
    } else if (percent >= 60) {
      message = "ผ่านแล้ว! ลองฝึกอีกนิดจะเก่งขึ้น";
    } else {
      message = "ลองทบทวนบทเรียนแล้วกลับมาทำใหม่";
    }

    return (
      <div className="result-page">
        <div className="result-card">
          <h1>ทำแบบฝึกหัดเสร็จแล้ว</h1>
          <p className="result-message">{message}</p>
          <div className="score-circle">
            <span>{percent}%</span>
          </div>
          <h2 className="score-text">
            {score} / {exercises.length} คะแนน
          </h2>
          <div className="result-detail">
            <div>
              ตอบถูก
              <strong>{score}</strong>
            </div>
            <div>
              ตอบผิด
              <strong>{exercises.length - score}</strong>
            </div>
          </div>
          <button className="finish-btn" onClick={() => navigate("/dashboard")}>
            กลับหน้าหลัก
          </button>
        </div>
      </div>
    );
  }

  return (
    <QuizChoice
      question={currentExercise.question}
      options={currentExercise.options}
      answer={currentExercise.answer}
      hint={currentExercise.hint}
      onNext={handleNext}
      onPrev={handlePrev}
      onArrowNext={handleArrowNext}
      canGoPrev={currentIndex > 0}
      canGoNext={currentIndex < exercises.length - 1}
      currentIndex={currentIndex}
      totalExercises={exercises.length}
      score={score}
      onBack={() => navigate("/dashboard")}
    />
  );
}

export default ExerciseRunner;