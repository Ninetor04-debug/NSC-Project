import { useLocation, useParams } from "react-router-dom";
import { lessons } from "../data/lessonsData";
import "./LessonViewer.css";

function LessonViewer() {
  const { id } = useParams();
  const { state } = useLocation();

  const lesson = state || lessons.find((l) => l.id === Number(id));

  if (!lesson) {
    return <h2>ไม่พบบทเรียน</h2>;
  }

  if (!lesson.pdf) {
    return <h2>บทเรียนนี้ยังไม่มีไฟล์ PDF</h2>;
  }

  return (
    <div className="lesson-pdf-page">
      <iframe
        src={lesson.pdf}
        title={lesson.title}
        className="lesson-pdf-viewer"
      />
    </div>
  );
}

export default LessonViewer;