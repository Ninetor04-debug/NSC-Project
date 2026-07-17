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
    // ไม่อัพเดต progress ตรงนี้แล้ว — progress จะขยับก็ต่อเมื่อทำแบบฝึกหัดเสร็จจริง
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

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button className="btn-primary" onClick={handleCompleteLesson}>
          ✔ เรียนจบบทนี้
        </button>
      </div>
    </>
  );
}

export default LessonViewer;