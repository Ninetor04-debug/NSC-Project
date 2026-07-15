import { createContext, useContext, useEffect, useState } from "react";
import { fetchProgress, fetchLessonScores } from "../scoreApi";

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [completedCount, setCompletedCountState] = useState(0);
  const [lessonScores, setLessonScores] = useState({});
  const [completedExercises, setCompletedExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem("user_id");

  async function loadProgress() {
    if (!userId) {
      setLoading(false);
      return;
    }
    try {
      const progress = await fetchProgress(userId);
      setCompletedCountState(progress.completed_count);

      const scores = await fetchLessonScores(userId);
      const scoreMap = {};
      scores.forEach((s) => {
        scoreMap[s.lesson_id] = { score: s.total_score, total: 100 };
      });
      setLessonScores(scoreMap);
    } catch (err) {
      console.error("โหลด progress ไม่สำเร็จ", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProgress();
  }, [userId]);

  // เรียกใช้แทน setCompletedCount เดิม — sync จาก Backend หลัง submit เสร็จ
  async function refreshProgress() {
    await loadProgress();
  }

  function addCompletedExercise(id) {
    setCompletedExercises((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    );
  }

  return (
    <ProgressContext.Provider
      value={{
        completedCount,
        lessonScores,
        completedExercises,
        addCompletedExercise,
        refreshProgress,
        loading,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}