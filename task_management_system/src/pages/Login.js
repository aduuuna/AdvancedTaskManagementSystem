import React, { useState } from "react";
import "../styles/global.css";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the login logic
    console.log("Login attempted with:", email, password);
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
          </form>
        </div>
        <div className="login-div2">
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="login-div2B">
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
    </div>
  );
}

export default LoginPage;
