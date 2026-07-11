import { createContext, useContext, useEffect, useState } from "react";

const ProgressContext = createContext();

const STORAGE_KEY = "muancode_completed_count";
const EXERCISES_STORAGE_KEY = "muancode_completed_exercises";
const SCORES_STORAGE_KEY = "muancode_lesson_scores";

export function ProgressProvider({ children }) {
  // จำนวนบทเรียนที่เรียนจบ
  const [completedCount, setCompletedCount] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? Number(saved) : 0;
  });

  // แบบฝึกหัดที่ทำแล้ว
  const [completedExercises, setCompletedExercises] = useState(() => {
    const saved = localStorage.getItem(EXERCISES_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  // คะแนนแต่ละบท
  // ตัวอย่าง
  // {
  //   1: { score: 8, total: 10 },
  //   2: { score: 9, total: 10 }
  // }
  const [lessonScores, setLessonScores] = useState(() => {
    const saved = localStorage.getItem(SCORES_STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  });

  // -----------------------------
  // Save LocalStorage
  // -----------------------------
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, completedCount);
  }, [completedCount]);

  useEffect(() => {
    localStorage.setItem(
      EXERCISES_STORAGE_KEY,
      JSON.stringify(completedExercises)
    );
  }, [completedExercises]);

  useEffect(() => {
    localStorage.setItem(
      SCORES_STORAGE_KEY,
      JSON.stringify(lessonScores)
    );
  }, [lessonScores]);

  // -----------------------------
  // Functions
  // -----------------------------

  function addCompletedExercise(id) {
    setCompletedExercises((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    );
  }

  // บันทึกคะแนนของบท
  function saveLessonScore(lessonId, score, total) {
    setLessonScores((prev) => ({
      ...prev,
      [lessonId]: {
        score,
        total,
      },
    }));
  }

  function resetProgress() {
    setCompletedCount(0);
    setCompletedExercises([]);
    setLessonScores({});

    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(EXERCISES_STORAGE_KEY);
    localStorage.removeItem(SCORES_STORAGE_KEY);
  }

  return (
    <ProgressContext.Provider
      value={{
        completedCount,
        setCompletedCount,

        completedExercises,
        addCompletedExercise,

        lessonScores,
        saveLessonScore,

        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}