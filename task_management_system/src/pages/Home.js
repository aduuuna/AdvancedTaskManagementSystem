import React from "react";
import { useNavigate } from "react-router-dom";
import { logout, getCurrentUser } from "../services/auth";

function HomePage() {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="home-container">
      {/* <h2>Welcome, {user.email}</h2>
      <button onClick={handleLogout}>Logout</button> */}
      <div class="header">Header</div>
      <div class="content">
        <div class="sidebar">Sidebar</div>
        <div class="main">Main</div>
      </div>
    </div>
  );
}

export default HomePage;
