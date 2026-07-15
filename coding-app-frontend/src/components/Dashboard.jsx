import { Link } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";
import { lessons } from "../data/lessonsData";
import "./Dashboard.css";

function Dashboard() {
  const { completedCount, loading } = useProgress();

  const totalLessons = lessons.length;

  if (loading) {
    return <div className="dashboard-content">กำลังโหลด...</div>;
  }

  const isCourseCompleted = completedCount >= totalLessons;

  const currentLesson = isCourseCompleted
    ? lessons[totalLessons - 1]
    : lessons[completedCount];

  const currentLessonNumber = isCourseCompleted
    ? totalLessons
    : completedCount + 1;

  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  const remainingMinutes = lessons
    .slice(completedCount)
    .reduce((sum, lesson) => sum + lesson.duration, 0);

  return (
    <div className="dashboard-content">
      <div className="dashboard-grid">
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

        <div className="card card-time">
          <div className="time-icon">
            <img src="clock-regular-full.svg" alt="" className="clock-icon" />
          </div>
          <p className="time-value">{remainingMinutes} นาที</p>
          <p className="time-label">จำนวนชั่วโมงเรียน</p>
        </div>

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
      </div>
    </div>
  );
}

export default Dashboard;