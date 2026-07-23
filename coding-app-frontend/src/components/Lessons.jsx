import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";
import { lessons } from "../data/lessonsData";

import "./Lessons.css";

const NODE_WIDTH = 320;

const positions = lessons.map((lesson, index) => {
  const offsets = [0, -70, 70, -70, 70];

  return {
    x: NODE_WIDTH / 2 + offsets[index % offsets.length],
    y: index * 150 + 70,
  };
});

function Lessons() {
  const { completedCount } = useProgress();

  const navigate = useNavigate();

  const [selectedLesson, setSelectedLesson] = useState(null);

  const getStatus = (index) => {
    if (index < completedCount) return "done";
    if (index === completedCount) return "current";
    return "locked";
  };

  const handleStartLesson = () => {
    navigate(`/lesson-video/${selectedLesson.id}`, {
      state: selectedLesson,
    });

    setSelectedLesson(null);
  };

  return (
    <div className="lessons-page">
      {/* Header */}
      <div className="lesson-header">
        <img
          src="/python-svgrepo-com.svg"
          alt="Python"
          className="lesson-header-icon"
        />

        <div>
          <h2>Python Course</h2>

          <p>
            ความคืบหน้า {completedCount} / {lessons.length}
          </p>
        </div>
      </div>

      {/* Path */}
      <div className="lesson-path">
        <svg
          className="lesson-svg"
          width={NODE_WIDTH}
          height={positions[positions.length - 1].y + 100}
        >
          {positions.slice(0, -1).map((point, index) => {
            const next = positions[index + 1];

            return (
              <line
                key={index}
                x1={point.x}
                y1={point.y}
                x2={next.x}
                y2={next.y}
                stroke={index < completedCount ? "#4C8DFF" : "#D9D9D9"}
                strokeWidth="12"
                strokeLinecap="round"
              />
            );
          })}
        </svg>

        {lessons.map((lesson, index) => {
          const status = getStatus(index);

          return (
            <div
              key={lesson.id}
              className="lesson-wrapper"
              style={{
                position: "absolute",
                left: `${positions[index].x}px`,
                top: `${positions[index].y}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <button
                className={`lesson-node ${status}`}
                disabled={status === "locked"}
                onClick={() => setSelectedLesson(lesson)}
              >
                {status === "done" ? "✓" : lesson.id}
              </button>
            </div>
          );
        })}
      </div>

      {/* Popup */}
      {selectedLesson && (
        <div
          className="lesson-modal-overlay"
          onClick={() => setSelectedLesson(null)}
        >
          <div
            className="lesson-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/python-svgrepo-com.svg"
              alt="Python"
              className="lesson-modal-icon"
            />

            <h2>{selectedLesson.title}</h2>

            <p>บทที่ {selectedLesson.id}</p>

            <button
              className="lesson-start-btn"
              onClick={handleStartLesson}
            >
              เริ่มเรียน
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Lessons;