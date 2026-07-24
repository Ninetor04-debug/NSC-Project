import { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

function Register() {
  const [form, setForm] = useState({
    name: "",
    grade: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function saveData(e) {
    e.preventDefault();
    setError("");

    try {
      await api.post("/auth/register", {
        full_name: form.name,
        grade: form.grade,
        password: form.password,
        confirm_password: form.confirmPassword,
      });

      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.detail || "สมัครสมาชิกไม่สำเร็จ");
    }
  }

  return (
    <>
      <div className="register-page">
        <div className="left-panel">
          <div className="Logo">
            <img src="/public/MuanCode Logo.svg" alt="Logo" className="logo-image" /> 
          </div>
        </div>

        <div className="right-panel">
          <form className="register-container" onSubmit={saveData}>
            <h1>สมัครบัญชี</h1>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <input
              type="text"
              placeholder="ชื่อ-นามสกุล"
              className="name-input"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <select
              className="grade-select"
              value={form.grade}
              onChange={(e) => setForm({ ...form, grade: e.target.value })}
            >
              <option value="">เลือกระดับชั้น</option>
              <option value="1">มัธยมศึกษาปีที่ 1</option>
              <option value="2">มัธยมศึกษาปีที่ 2</option>
              <option value="3">มัธยมศึกษาปีที่ 3</option>
            </select>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="รหัสผ่าน"
              className="password-input"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
            </button>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="ยืนยันรหัสผ่าน"
              className="password-input"
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
            />

            <button type="submit">สมัครบัญชี</button>

            <p className="login-link-text">
              มีบัญชีอยู่แล้ว?{" "}
              <Link to="/login" className="login-link">
                คลิกที่นี่เพื่อเข้าสู่ระบบ
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;