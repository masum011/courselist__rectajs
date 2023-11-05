import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "./layout.css";
export default function Layout(props) {
  const { children } = props;
  return (
    <div className="layout--root">
      <div className="layout--header">
        <Header />
      </div>
      <div className="layout--content">
        <main>{children}</main>
      </div>
    </div>
  );
}
