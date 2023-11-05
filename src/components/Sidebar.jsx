import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar--root">
      <div className="sidebar--home"onClick={() => navigate("/")}>
        <span class="material-symbols-outlined">home</span>
        <p >Home</p>
      </div>
      <div className="sidebar--home"onClick={() => navigate("/dashboard")}>
        <span class="material-symbols-outlined">dashboard</span>
        <p >Dashboard</p>
      </div>
    </div>
  );
}
