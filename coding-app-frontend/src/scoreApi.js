import api from "./api";

export async function fetchProgress(userId) {
  const res = await api.get(`/score/user/${userId}/progress`);
  return res.data;
}

export async function fetchLessonScores(userId) {
  const res = await api.get(`/score/user/${userId}`);
  return res.data;
}

// สำหรับแบบฝึกหัดชนิด choice (ปรนัย)
export async function submitQuizScore(lessonId, userId, answers) {
  const res = await api.post(`/quiz/submit`, {
    lesson_id: lessonId,
    user_id: userId,
    answers,
  });
  return res.data;
}

// สำหรับแบบฝึกหัดชนิด fill (เติมคำ) — บันทึกคะแนนตรงเข้า score table
// เพราะโจทย์ fill ยังเป็น mock data ไม่ได้ผูกกับตาราง fill_in_blocks จริง
export async function submitFillScore(lessonId, userId, score, total) {
  const percent = Math.round((score / total) * 100);
  const res = await api.post(`/score/update-fillblock`, {
    user_id: userId,
    lesson_id: lessonId,
    fillblock_score: percent,
  });
  return res.data;
}