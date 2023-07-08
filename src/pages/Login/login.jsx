// import { useEffect } from "react";

// import axios from "axios";

import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import "./Login.css";

export default function Login() {
  const { navigate } = useContext(AuthContext);

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
          <button onClick={() => navigate("/home")}>Guest Login</button>
          <p className="link-text" onClick={() => navigate("/signup")}>
            Create New Account?
          </p>
        </div>
      </div>
    </>
  );
}
