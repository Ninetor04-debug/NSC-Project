import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import api from "../api";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/auth/login", {
        full_name: username,
        password: password,
      });

      // เก็บ token ไว้ใช้ครั้งถัดไป
      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("full_name", res.data.full_name);
      localStorage.setItem("grade", res.data.grade);

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.detail || "เข้าสู่ระบบไม่สำเร็จ");
    }
  }

  return (
    <>
      <div className="login-page">
        <div className="left-panel"></div>
        <div className="right-panel">
          <form className="login-container" onSubmit={handleLogin}>
            <h1>เข้าสู่ระบบ</h1>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <input
              type="text"
              placeholder="ชื่อผู้ใช้"
              className="username-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="รหัสผ่าน"
              className="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">เข้าสู่ระบบ</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;