// src/components/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Aside from "./Aside";

function MainLayout() {
  return (
    <div className="navbar"> 
      <Aside /> 
      
      <div className="content"> 
        <Outlet /> 
      </div>
    </div>
  );
}

export default MainLayout;