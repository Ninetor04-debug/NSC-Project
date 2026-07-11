import { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    // ตรงนี้ใส่ Logic ตรวจสอบ username/password เพิ่มได้ในอนาคต

    navigate("/dashboard");
  }

  return (
    <>
      <div className="login-page">
        <div className="left-panel"></div>
        <div className="right-panel">
          <form className="login-container" onSubmit={handleLogin}>
            <h1>เข้าสู่ระบบ</h1>

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