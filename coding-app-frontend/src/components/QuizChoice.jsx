import { useState, useEffect } from "react";
import "./ChoiceExercise.css";

export default function QuizChoice({
  question,
  options = [],
  answer,
  hint,
  onNext,
  onPrev,
  onArrowNext,
  canGoPrev,
  canGoNext,
  currentIndex,
  totalExercises,
  score,
  onBack,
}) {
  const [selected, setSelected] = useState(null);
  const [showHint, setShowHint] = useState(false);

  // เมื่อเปลี่ยนคำถาม ให้ล้างคำตอบและซ่อน Hint
  useEffect(() => {
    setSelected(null);
    setShowHint(false);
  }, [question]);

  function handleNext() {
    if (selected === null) return;

    onNext?.({
      selected,
      correct: selected === answer,
    });
  }

  const progressPct = ((currentIndex + 1) / totalExercises) * 100;

  return (
    <div className="qc-screen">
      {/* Header */}
      <div className="header">
        {/* กากบาท */}
        <button
          type="button"
          className="close-btn"
          onClick={onBack}
          aria-label="ออกจากแบบฝึกหัด"
        >
          ✕
        </button>

        {/* Progress Track */}
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{
              width: `${progressPct}%`,
            }}
          />
        </div>

        {/* คะแนน */}
        <div className="score-count">{score} ✔</div>
      </div>

      {/* เนื้อหาหลัก */}
      <div className="qc-card">
        {/* คำถาม */}
        {question && <p className="qc-question">{question}</p>}

        {/* ตัวเลือก */}
        <div className="qc-options">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              className={`qc-option ${
                selected === index ? "qc-option--selected" : ""
              }`}
              onClick={() => setSelected(index)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* ปุ่มต่อไป */}
        <button
          type="button"
          className="qc-next-btn"
          onClick={handleNext}
          disabled={selected === null}
        >
          ต่อไป
        </button>

        {/* ลูกศรด้านล่าง */}
        <div className="qc-bottom-nav">
          <button
            type="button"
            className="qc-arrow-btn"
            onClick={onPrev}
            disabled={!canGoPrev}
            aria-label="ข้อก่อนหน้า"
          >
            ‹
          </button>

          <button
            type="button"
            className="qc-arrow-btn"
            onClick={onArrowNext}
            disabled={!canGoNext}
            aria-label="ข้อถัดไป"
          >
            ›
          </button>
        </div>
      </div>

      {/* =========================
          Hint Button
      ========================= */}

      <button
        type="button"
        className="hint-button"
        onClick={() => setShowHint((prev) => !prev)}
      >
        <img src="/lightbulb-regular-full.svg" alt="" className="hint-icon" />
      </button>

      {showHint && (
        <div className="hint-box">
          <div className="hint-title">คำใบ้</div>

          <div className="hint-content">{hint}</div>
        </div>
      )}
    </div>
  );
}
