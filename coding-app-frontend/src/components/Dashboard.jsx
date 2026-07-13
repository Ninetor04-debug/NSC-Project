import { Link } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";
import { lessons } from "../data/lessonsData";
import "./Dashboard.css";

const mainMenu = [
  {
    key: "home",
    label: "หน้าหลัก",
    to: "/",
    className: "nav-item-home",
    icon: "house-solid-full (1).svg",
  },
  {
    key: "lessons",
    label: "บทเรียน",
    to: "/lessons",
    className: "nav-item-lessons",
    icon: "book-solid-full.svg",
  },
  {
    key: "exercises",
    label: "แบบฝึกหัด",
    to: "/exercise",
    className: "nav-item-exercises",
    icon: "pen-solid-full.svg",
  },
  {
    key: "stats",
    label: "สถิติ",
    to: "/lessons",
    className: "nav-item-stats",
    icon: "chart_data.svg",
  },
];

function Dashboard() {
  const { completedCount, setCompletedCount } = useProgress();

  const totalLessons = lessons.length;

  const handleResetProgress = () => {
    setCompletedCount(0);
  };

  const isCourseCompleted = completedCount >= totalLessons;

  // บทเรียน "ปัจจุบัน" = บทถัดไปที่ยังไม่ได้เรียน (ถ้าเรียนจบหมดแล้วให้ค้างที่บทสุดท้าย)
  const currentLesson = isCourseCompleted
    ? lessons[totalLessons - 1]
    : lessons[completedCount];

  const currentLessonNumber = isCourseCompleted
    ? totalLessons
    : completedCount + 1;

  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  // เวลาเรียนรวม = ผลรวมของบทเรียนที่ "ยังไม่ได้เรียน" เท่านั้น
  // เรียนจบ 1 บท เวลาก็จะลดลงตาม duration ของบทนั้นโดยอัตโนมัติ
  const remainingMinutes = lessons
    .slice(completedCount)
    .reduce((sum, lesson) => sum + lesson.duration, 0);

  return (
    <div className="dashboard-content">
      <div className="dashboard-grid">
        {/* Card หลัก: บทเรียนปัจจุบัน + progress bar */}
        <div className="card card-lesson">
          <div className="card-lesson-header">
            <img src="python-svgrepo-com.svg" alt="" className="lesson-icon" />
            <div>
              <h2 className="lesson-title">{currentLesson.title}</h2>
              <p className="lesson-subtitle">
                บทที่ {currentLessonNumber} : {currentLesson.title}
              </p>
            </div>
          </div>

          <div className="progress-row">
            <div className="progress-bar-track">
              <div
                className="progress-bar-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="progress-label">{progressPercent}%</span>
          </div>

          {/* ปรับตรงนี้ด้วยเพื่อให้สอดคล้องกันเวลากดเริ่มเรียน */}
          {isCourseCompleted ? (
            <button className="btn-primary" disabled={true}>
              ▶ เรียนจบแล้ว
            </button>
          ) : (
            <Link to={`/lesson/${currentLesson.id}`}>
              <button className="btn-primary">▶ เริ่มเรียน</button>
            </Link>
          )}
        </div>

        {/* Card เวลาเรียนรวมที่เหลือ */}
        <div className="card card-time">
          <div className="time-icon">
            <img src="clock-regular-full.svg" alt="" className="clock-icon" />
          </div>
          <p className="time-value">{remainingMinutes} นาที</p>
          <p className="time-label">จำนวนชั่วโมงเรียน</p>
        </div>

        {/* Card แบบฝึกหัดหลังบทเรียน */}
        <div className="card card-exercise">
          <div className="card-lesson-header">
            <img src="python-svgrepo-com.svg" alt="" className="lesson-icon" />

            <div>
              <h3 className="lesson-title lesson-title-sm">
                แบบฝึกหัดหลังบทเรียน
              </h3>

              <p className="lesson-subtitle">
                บทที่ {currentLessonNumber} : {currentLesson.title}
              </p>
            </div>
          </div>

          {isCourseCompleted ? (
            <button className="btn-primary" disabled={true}>
              ▶ ทำครบแล้ว
            </button>
          ) : (
            <Link to={`/exercise/${currentLesson.id}`}>
              <button className="btn-primary">▶ เริ่มทำ</button>
            </Link>
          )}
        </div>

        <div className="card card-empty" />
        <div className="card card-empty" />
      </div>

      {/* ปุ่มไว้ทดสอบ reset progress ระหว่าง dev - เอาออกได้ตอนใช้งานจริง */}
      <button className="btn-reset" onClick={handleResetProgress}>
        รีเซ็ตความคืบหน้า (dev only)
      </button>
    </div>
  );
}

export default Dashboard;
