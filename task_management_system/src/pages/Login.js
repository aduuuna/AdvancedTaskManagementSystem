import React, { useState } from "react";
import "../styles/global.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-div1">
          <div className="login-div1A">
            <p className="text1">
              Great to see you! <br /> Enter your credentials to log in.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="A">
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="B">
              <button type="submit" className="login-button">
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="login-div2">
          <p>
            New here?{" "}
            <span className="text2">
              <Link className="link" to="/signup">
                Create account.
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
