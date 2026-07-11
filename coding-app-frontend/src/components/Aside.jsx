import { Link, useNavigate } from "react-router-dom";

const mainMenu = [
  { key: "home", label: "หน้าหลัก", to: "/Dashboard", icon: "house-solid-full (1).svg" },
  { key: "lessons", label: "บทเรียน", to: "/lessons", icon: "book-solid-full.svg" },
  { key: "exercises", label: "แบบฝึกหัด", to: "/exercise", icon: "pen-solid-full.svg" },
  { key: "stats", label: "สถิติ", to: "/stats", icon: "chart_data.svg" },
];

function Aside() {
const navigate = useNavigate();
const handleLogout = (e) => {
    e.preventDefault();
    navigate("/login");
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
            <Link to="/profile">
              <img src="account_circle.svg" alt="" className="profile-icon" />
              <span className="nav-label">โปรไฟล์</span>
            </Link>

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