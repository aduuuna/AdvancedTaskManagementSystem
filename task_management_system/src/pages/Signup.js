import React, { useState } from "react";
import "../styles/global.css";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the login logic
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
              id="password"
              placeholder="Confirm Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </form>
        </div>
        <div className="signup-div2">
          <button type="submit" className="signup-button">
            Sign Up
          </button>
          <div className="signup-div2B">
            <p>
              Been here before? <span className="text2">Log in now.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
