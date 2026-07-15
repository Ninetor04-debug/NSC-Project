import { Link, useNavigate } from "react-router-dom";

const mainMenu = [
  { key: "home", label: "หน้าหลัก", to: "/Dashboard", icon: "house-solid-full (1).svg" },
  { key: "lessons", label: "บทเรียน", to: "/lessons", icon: "book-solid-full.svg" },
];

function Aside() {
const navigate = useNavigate();
const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("full_name");
    localStorage.removeItem("grade");
    window.location.href = "/login";  // ใช้ window.location.href เหมือนกัน
};
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <span className="sidebar-logo-text">MuanCode</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {mainMenu.map((item) => (
            <li key={item.key} className="nav-item">
              <Link to={item.to}>
                <img src={item.icon} alt="" className="nav-icon" />
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="sidebar-menu sidebar-menu-bottom">
          <li className="nav-item">

            <Link to="/login">
              <img src="logout.svg" alt="" className="logout-icon" />
              <span className="nav-label">ออกจากระบบ</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;