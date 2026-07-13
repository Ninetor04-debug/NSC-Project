import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";
import { lessons } from "../data/lessonsData";

function LessonViewer() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { completedCount, setCompletedCount } = useProgress();

  // ค้นหาบทเรียนปัจจุบัน
  const lesson = lessons.find((l) => l.id === Number(id));

  console.log("---- Debug LessonViewer ----");
  console.log("ID จาก URL:", id);
  console.log("บทเรียนที่พบ:", lesson);
  console.log("Progress ปัจจุบัน (เรียนจบแล้ว):", completedCount);

  // 1. ดักกรณีหาบทเรียนไม่เจอ
  if (!lesson) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2> ไม่พบบทเรียน</h2>
        <button className="btn-primary" onClick={() => navigate("/dashboard")}>กลับหน้าหลัก</button>
      </div>
    );
  }

  // 2. ดักกรณีไม่มีไฟล์ PDF
  if (!lesson.pdf) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2> บทเรียนนี้ยังไม่มีไฟล์ PDF</h2>
        <p>บทที่ {lesson.id}: {lesson.title}</p>
        <button className="btn-primary" onClick={() => navigate("/dashboard")}>กลับหน้าหลัก</button>
      </div>
    );
  }

  // ฟังก์ชันเมื่อกดเรียนจบ
  const handleCompleteLesson = () => {
    // อัปเดต Progress ทีละสเต็ป (ป้องกันการกดข้ามบทแล้วบั๊ก)
    if (lesson.id === completedCount + 1) {
      setCompletedCount((prev) => prev + 1);
    }

    // หาบทเรียนถัดไป
    const nextLesson = lessons.find((l) => l.id === lesson.id + 1);

    // เช็กว่าบทถัดไปมีอยู่จริง และมีไฟล์ PDF ไหม
    if (nextLesson && nextLesson.pdf) {
      navigate(`/lesson/${nextLesson.id}`);
    } else {
      // ถ้าไม่มีบทถัดไป หรือยังไม่มี PDF ให้เด้งกลับหน้า Dashboard
      navigate("/dashboard");
    }
  };

  return (
    <div className="lesson-viewer-container">
      <iframe
        src={lesson.pdf}
        title={lesson.title}
        width="100%"
        height="900"
        style={{ border: "none", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
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
    </div>
  );
}

export default LessonViewer;