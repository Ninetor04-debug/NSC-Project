import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import MainLayout from "./components/MainLayout";
import Lessons from "./components/Lessons";
import ExerciseRunner from "./components/ExerciseRunner";
import LessonViewer from "./components/LessonViewer";
import LessonVideoViewer from "./components/LessonVideoViewer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/exercise/:lessonId" element={<ExerciseRunner />} />
        <Route path="/lesson/:id" element={<LessonViewer />} />
        <Route path="/lesson-video/:id" element={<LessonVideoViewer />} />
      </Route>
    </Routes>
  );
}

export default App;