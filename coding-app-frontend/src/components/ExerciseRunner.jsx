import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { lessons } from "../data/lessonsData";
import { useProgress } from "../context/ProgressContext";
import QuizChoice from "./QuizChoice";
import "./Result.css";

function ExerciseRunner() {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const {
    completedExercises,
    addCompletedExercise,
    saveLessonScore,
  } = useProgress();

  const lesson = lessons.find(
    (l) => l.id === Number(lessonId)
  );

  if (!lesson) {
    return <h2>ไม่พบบทเรียน</h2>;
  }

  const exercises = lesson.exercises || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentExercise = exercises[currentIndex];

  if (!currentExercise) {
    return <h2>บทนี้ยังไม่มีแบบฝึกหัด</h2>;
  }

  function handleNext({ correct }) {

    const exerciseKey = `${lesson.id}-${currentExercise.id}`;

    if (!completedExercises.includes(exerciseKey)) {
      addCompletedExercise(exerciseKey);
    }

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

      saveLessonScore(
        lesson.id,
        newScore,
        exercises.length
      );

      setFinished(true);
    }
  }

  if (finished) {
  const percent = Math.round((score / exercises.length) * 100);

  let message = "";
  let emoji = "";

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

        <div className="result-emoji">
          {emoji}
        </div>

        <h1>ทำแบบฝึกหัดเสร็จแล้ว</h1>

        <p className="result-message">
          {message}
        </p>

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

        <button
          className="finish-btn"
          onClick={() => navigate("/exercise")}
        >
          กลับหน้าแบบฝึกหัด
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
      onNext={handleNext}
    />
  );
}

export default ExerciseRunner;