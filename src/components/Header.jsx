import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate=useNavigate()
  return (
    <div className="header--compo">
      <b onClick={()=>navigate('/')}>Home</b>
      <div className="student--dashboard" onClick={()=>navigate('/dashboard')}>
        <span class="material-symbols-outlined">account_circle</span>
        <b>Student</b>
      </div>
    </div>
  );
}
