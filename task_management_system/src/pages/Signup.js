import React, { useState } from "react";
import "../styles/global.css";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../services/auth";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (signup(email, password)) {
      alert("Signup successful!");
      navigate("/");
    } else {
      alert("Signup failed. Email might already be in use.");
    }
    console.log("Login attempted with:", email, password);
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-div1">
          <div className="signup-div1A">
            <p className="text1">
              Start here! <br /> Enter your credentials to sign up.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="C">
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

              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="D">
              <button
                type="submit"
                className="signup-button"
                onClick={() => {
                  console.log(
                    "Signup attempted with:",
                    email,
                    password,
                    confirmPassword
                  );
                }}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        <div className="signup-div2B">
          <p>
            Been here before?{" "}
            <span className="text2">
              <Link className="link" to="/">
                Log in now.
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
