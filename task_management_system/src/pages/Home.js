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

      <div className="content2">
        <div className="sidebar">Sidebar</div>
        <div className="main">Main</div>
      </div>
    </div>
  );
}

export default HomePage;
