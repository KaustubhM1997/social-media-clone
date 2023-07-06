// import { useEffect } from "react";

// import axios from "axios";

import { useNavigate } from "react-router-dom";
import "./login.css";
export default function Login() {
  const navigate = useNavigate();

  return (
    <>
      <p className="landing-header-login">SocialNetwork</p>

      <div className="login-container">
        <h1>Login</h1>

        <div className="field-container">
          <div>
            <p className="form-label">Email Address</p>
            <input placeholder="Enter your email address..."></input>
          </div>

          <div>
            <p className="form-label">Password</p>
            <input placeholder="Enter your password..."></input>
          </div>
        </div>

        <div className="btn-container">
          <button onClick={() => navigate("/explore")}>Login</button>
          <button>Guest Login</button>
          <p className="link-text" onClick={() => navigate("/signup")}>
            Create New Account?
          </p>
        </div>
      </div>
    </>
  );
}
