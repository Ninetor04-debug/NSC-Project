import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";
import { lessons } from "../data/lessonsData";

function LessonViewer() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const { completedCount, setCompletedCount } = useProgress();

const lesson = lessons.find(
  (l) => l.id === Number(id)
);

console.log("ID:", id);
console.log("LESSON:", lesson);

  if (!lesson) {
    return <h2>ไม่พบบทเรียน</h2>;
  }

  if (!lesson.pdf) {
    return <h2>บทเรียนนี้ยังไม่มีไฟล์ PDF</h2>;
  }

const handleCompleteLesson = () => {
  // ป้องกันการกดซ้ำ
  if (lesson.id > completedCount) {
    setCompletedCount(lesson.id);
  }

  // หลังเรียนจบ ไปทำแบบฝึกหัดของบทนี้ก่อน
  navigate(`/exercise/${lesson.id}`);
};

  return (
    <>
      <iframe
        src={lesson.pdf}
        title={lesson.title}
        width="100%"
        height="900"
        style={{ border: "none" }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <button
          className="btn-primary"
          onClick={handleCompleteLesson}
        >
          ✔ เรียนจบบทนี้
        </button>
      </div>
    </>
  );
}

export default LessonViewer;