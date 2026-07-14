// PythonSyntaxQuiz.jsx
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./PythonSyntaxQuiz.css";
import "./Result.css";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function PythonSyntaxQuiz({ lesson, onFinish, onBack }) {
  const navigate = useNavigate();

  const exercises = lesson?.exercises || [];

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [status, setStatus] = useState("idle");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const exercise = exercises[index];
  const isFillCode = !!exercise && Array.isArray(exercise.code) && exercise.code.length > 0;

  const blanks = useMemo(
    () => (isFillCode ? exercise.code.filter((seg) => seg.type === "blank") : []),
    [exercise, isFillCode]
  );

  const shuffledOptions = useMemo(() => {
    if (!exercise) return [];
    return shuffle(exercise.options || []);
  }, [exercise]);

  const usedWords = useMemo(() => new Set(Object.values(answers)), [answers]);

  const allFilled = isFillCode
    ? blanks.every((b) => answers[b.id])
    : selectedOption !== null;

  if (!lesson) {
    return (
      <div className="error-container">
        <h2>ไม่พบบทเรียนนี้</h2>
        {onBack && <button className="secondary-button" onClick={onBack}>กลับไปหน้าบทเรียน</button>}
      </div>
    );
  }

  if (exercises.length === 0) {
    return (
      <div className="error-container">
        <h2>บท "{lesson.title}" ยังไม่มีแบบฝึกหัดที่ใช้งานได้</h2>
        {onBack && <button className="secondary-button" onClick={onBack}>กลับไปหน้าบทเรียน</button>}
      </div>
    );
  }

  function pickWord(word) {
    if (status !== "idle") return;
    if (usedWords.has(word)) return;
    const nextBlank = blanks.find((b) => !answers[b.id]);
    if (!nextBlank) return;
    setAnswers((prev) => ({ ...prev, [nextBlank.id]: word }));
  }

  function clearBlank(blankId) {
    if (status !== "idle") return;
    setAnswers((prev) => {
      const copy = { ...prev };
      delete copy[blankId];
      return copy;
    });
  }

  function pickChoice(word) {
    if (status !== "idle") return;
    setSelectedOption(word);
  }

  function checkAnswer() {
    if (!allFilled || status !== "idle") return;
    let isCorrect;
    if (isFillCode) {
      isCorrect = blanks.every((b) => answers[b.id] === b.answer);
    } else {
      const correctText = exercise.options[exercise.answer];
      isCorrect = selectedOption === correctText;
    }
    setStatus(isCorrect ? "correct" : "wrong");
    if (isCorrect) setScore((s) => s + 1);
  }

  function nextQuestion() {
    const nextScore = score;
    if (index + 1 >= exercises.length) {
      setFinished(true);
      if (onFinish) onFinish(nextScore, exercises.length);
      return;
    }
    setIndex((i) => i + 1);
    setAnswers({});
    setSelectedOption(null);
    setStatus("idle");
  }

  const progressPct = finished ? 100 : Math.round((index / exercises.length) * 100);

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
    <div className="page">
      {/* ส่วนหัวแสดงความคืบหน้า */}
      <div className="header">
        <span className="close-btn" onClick={onBack}>✕</span>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <span className="heart-count">{score} ✓</span>
      </div>

      {/* ส่วนเนื้อหาหลัก */}
      <div className="body">
        <span className="category-tag">{lesson.title}</span>
        <h2 className="heading">
          {isFillCode ? "เติมคำในช่องว่างให้ถูกต้อง" : "เลือกคำตอบที่ถูกต้อง"}
        </h2>

        {/* ระบบโจทย์แบบเติมโค้ด (Fill in the blank) */}
        {isFillCode && (
          <>
            <div className="code-block">
              <div className="code-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="code-content">
                {exercise.code.map((seg, i) => {
                  if (seg.type === "text") {
                    return <span key={i} className="code-text">{seg.value}</span>;
                  }

                  const filled = answers[seg.id];
                  const isWrongBlank = status === "wrong" && filled && filled !== seg.answer;
                  const isCorrectBlank = status !== "idle" && filled === seg.answer;

                  let blankClassName = "blank";
                  if (filled) blankClassName += " blank-filled";
                  if (isCorrectBlank) blankClassName += " blank-correct";
                  if (isWrongBlank) blankClassName += " blank-wrong";

                  return (
                    <span
                      key={seg.id}
                      onClick={() => clearBlank(seg.id)}
                      className={blankClassName}
                      style={{ cursor: status === "idle" && filled ? "pointer" : "default" }}
                    >
                      {filled || "\u00A0\u00A0\u00A0\u00A0"}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* กล่องเฉลยด้านล่าง Code Block เมื่อตอบผิด */}
            {status === "wrong" && (
              <div className="correction-box">
                เฉลย:
                {blanks.map((b) => (
                  <code key={b.id} className="correction-code">{b.answer}</code>
                ))}
              </div>
            )}

            {/* ตัวเลือกคำศัพท์ (Word Bank) */}
            <div className="options-row">
              {shuffledOptions.map((word) => {
                const isUsed = usedWords.has(word);
                const disabled = isUsed || status !== "idle";
                return (
                  <button
                    key={word}
                    onClick={() => pickWord(word)}
                    disabled={disabled}
                    className={`option-button ${isUsed ? "option-used" : ""}`}
                  >
                    {word}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {/* ระบบโจทย์แบบเลือกตอบปกติ (Multiple Choice) */}
        {!isFillCode && exercise && (
          <div className="choice-list">
            <div className="question-card">{exercise.question}</div>
            {exercise.options.map((option) => {
              const isSelected = selectedOption === option;
              const isCorrectAns = exercise.options[exercise.answer] === option;

              let choiceClass = "choice-button";
              if (isSelected) choiceClass += " choice-selected";
              if (status !== "idle" && isCorrectAns) choiceClass += " choice-correct";
              if (status === "wrong" && isSelected && !isCorrectAns) choiceClass += " choice-wrong";

              return (
                <button
                  key={option}
                  onClick={() => pickChoice(option)}
                  className={choiceClass}
                  disabled={status !== "idle"}
                >
                  {option}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* แถบตรวจคำตอบด้านล่างสุด (Footer Status Bar) */}
      <div className={`footer ${status}`}>
        {status === "idle" ? (
          <>
            <button className="skip-button" onClick={nextQuestion}>ข้าม</button>
            <button
              className={`check-button ${allFilled ? "check-button-active" : ""}`}
              onClick={checkAnswer}
              disabled={!allFilled}
            >
              ตรวจคำตอบ
            </button>
          </>
        ) : (
          <div className="result-row">
            <div className="result-message">
              <span className="result-icon">{status === "correct" ? "✔" : "✕"}</span>
              <span className="result-text">
                {status === "correct" ? "เก่งมาก! ถูกต้อง" : "ยังไม่ถูก ลองดูเฉลยด้านบน"}
              </span>
            </div>
            <button
              className={`check-button check-button-active ${status === "wrong" ? "continue-button-wrong" : ""}`}
              onClick={nextQuestion}
            >
              ดำเนินการต่อ
            </button>
          </div>
        )}
      </div>
    </div>
  );
}