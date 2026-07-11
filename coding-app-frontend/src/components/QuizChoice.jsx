import { useState, useEffect } from "react";
import "./ChoiceExercise.css";

export default function QuizChoice({
  question,
  options = [],
  answer,
  onNext,
}) {
  const [selected, setSelected] = useState(null);

  // รีเซ็ตเมื่อเปลี่ยนข้อใหม่
  useEffect(() => {
    setSelected(null);
  }, [question]);

  function handleNext() {
    if (selected === null) return;

    onNext?.({
      selected,
      correct: selected === answer,
    });
  }

  return (
    <div className="qc-screen">
      <div className="qc-card">
        {question && <p className="qc-question">{question}</p>}

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

        <button
          type="button"
          className="qc-next-btn"
          onClick={handleNext}
          disabled={selected === null}
        >
          ต่อไป
        </button>
      </div>
    </div>
  );
}