import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { lessons } from "../data/lessonsData";
import "./LessonVideoViewer.css";

function LessonVideoViewer() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [isDocOpen, setIsDocOpen] = useState(true);

  const lesson = state || lessons.find((l) => l.id === Number(id));

  if (!lesson) {
    return <h2>ไม่พบบทเรียน</h2>;
  }

  const goToPdf = () => {
    navigate(`/lesson/${lesson.id}`, { state: lesson });
  };

  const handleCompleteLesson = () => {
    // ไม่ set completedCount ตรงนี้แล้ว — progress ขยับจริงเมื่อทำแบบฝึกหัดเสร็จเท่านั้น
    navigate(`/exercise/${lesson.id}`);
  };

  return (
    <div className="lesson-video-page">
      <div className="lesson-video-header">
        <h2>{lesson.title}</h2>
        <p>บทที่ {lesson.id}</p>
      </div>

      {lesson.video ? (
        <div className="lesson-video-wrapper">
          <video key={lesson.id} src={lesson.video} controls className="lesson-video-player" />
        </div>
      ) : (
        <p>บทเรียนนี้ยังไม่มีคลิปวิดีโอ</p>
      )}

      {lesson.pdf && (
        <div className="doc-accordion">
          <button className="doc-accordion-header" onClick={() => setIsDocOpen((prev) => !prev)}>
            <span>Download เอกสารประกอบการเรียน</span>
            <span className={`doc-accordion-arrow ${isDocOpen ? "open" : ""}`}>▾</span>
          </button>

          {isDocOpen && (
            <div className="doc-accordion-body">
              <button className="doc-download-btn" onClick={goToPdf}>
                {String(lesson.id).padStart(3, "0")} - Download เอกสาร
              </button>
            </div>
          )}
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button className="lesson-complete-btn" onClick={handleCompleteLesson}>
          เรียนจบบทนี้
        </button>
      </div>
    </div>
  );
}

export default LessonVideoViewer;