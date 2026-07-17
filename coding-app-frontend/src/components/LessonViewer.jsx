import { useNavigate, useParams } from "react-router-dom";
import { lessons } from "../data/lessonsData";

function LessonViewer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const lesson = lessons.find((l) => l.id === Number(id));

  if (!lesson) {
    return <h2>ไม่พบบทเรียน</h2>;
  }

  if (!lesson.pdf) {
    return <h2>บทเรียนนี้ยังไม่มีไฟล์ PDF</h2>;
  }

  const handleCompleteLesson = () => {
    navigate(`/exercise/${lesson.id}`);
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
        padding: "0 12px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          // อัตราส่วนของ PDF ปกติ A4 แนวตั้ง ~ 1:1.414
          // ใช้ aspect-ratio แทนความสูงตายตัว จะได้ปรับตามความกว้างจออัตโนมัติ
          aspectRatio: "1 / 1.3",
          maxHeight: "85vh",
        }}
      >
        <iframe
          src={lesson.pdf}
          title={lesson.title}
          width="100%"
          height="100%"
          style={{
            border: "none",
            display: "block",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <button className="btn-primary" onClick={handleCompleteLesson}>
          ✔ เรียนจบบทนี้
        </button>
      </div>
    </div>
  );
}

export default LessonViewer;