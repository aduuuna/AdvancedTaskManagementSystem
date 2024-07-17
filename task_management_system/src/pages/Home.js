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
    <div>
      <h2>Welcome, {user.email}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default HomePage;
