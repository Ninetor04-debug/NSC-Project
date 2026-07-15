import { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/auth/login", {
        full_name: username,
        password: password,
      });

      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("user_id", res.data.user_id);
      localStorage.setItem("full_name", res.data.full_name);
      localStorage.setItem("grade", res.data.grade);

      // เปลี่ยนจาก navigate เป็น window.location.href
      // เพื่อ reload หน้าเว็บทั้งหมด ทำให้ ProgressContext โหลดข้อมูลใหม่ตาม user_id ล่าสุด
      window.location.href = "/dashboard";
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
              type={showPassword ? "text" : "password"}
              placeholder="รหัสผ่าน"
              className="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
            </button>

            <button type="submit">เข้าสู่ระบบ</button>

            <p className="register-link-text">
              ยังไม่มีบัญชีใช่ไหม?{" "}
              <Link to="/" className="register-link">
                สร้างบัญชีที่นี่
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;