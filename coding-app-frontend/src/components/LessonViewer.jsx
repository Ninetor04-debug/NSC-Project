import { useLocation } from "react-router-dom";

function LessonViewer() {
  const { state } = useLocation();

  if (!state) {
    return <h2>ไม่พบบทเรียน</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{state.title}</h1>

      <iframe
        src={state.pdf}
        title={state.title}
        width="100%"
        height="800"
        style={{
          border: "none",
          borderRadius: "10px",
        }}
      />
    </div>
  );
}

export default LessonViewer;