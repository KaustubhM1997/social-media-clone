import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import "./Login.css";

export default function Login() {
  const {
    navigate,
    user,
    guestLogin,
    checkUser,
    showPassword,
    setShowPassword,
    handleChange,
  } = useContext(AuthContext);

  //FOR A USER THAT WAS ALREADY LOGGED IN AND DIDN'T CLICK ON THE LOGOUT BUTTON

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, []);

  //FUNCTION TO HANDLE GUEST AND NEW USERS TRYING TO LOG IN

  const submitHandler = (type) => {
    if (type === "not a guest") {
      if (user.username !== "" && user.password !== "") {
        //user fills in details to login and we call the checkuser function
        checkUser();
      } else {
        alert("Please fill in your login credentials");
      }
    } else {
      //when the user logs in as a guest
      guestLogin();
    }
  };
  return (
    <>
      <p className="landing-header-login">SocialNetwork</p>

      <form>
        <div className="login-container">
          <h1>Login</h1>

          <div className="field-container">
            <div>
              <p className="form-label">Username</p>
              <input
                id="username"
                type="text"
                required
                value={user.username}
                onChange={(e) => handleChange(e)}
                placeholder="Enter your username..."
              ></input>
            </div>

            <div>
              <p className="form-label">Password</p>

              <div className="login-password">
                <input
                  id="password"
                  value={user.password}
                  required
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter your password..."
                  type={`${showPassword ? "text" : "password"}`}
                ></input>

                {showPassword ? (
                  <i
                    onClick={() => setShowPassword(!showPassword)}
                    class="fa-regular fa-eye password-icon"
                  ></i>
                ) : (
                  <i
                    onClick={() => setShowPassword(!showPassword)}
                    class="fa-regular fa-eye-slash password-icon"
                  ></i>
                )}
              </div>
            </div>
          </div>

          <div className="btn-container">
            {/* <button onClick={() => navigate("/explore")}>Login</button> */}
            <button
              onClick={(e) => {
                e.preventDefault();
                submitHandler("not a guest");
              }}
            >
              Login
            </button>
            {/* <button onClick={() => navigate("/home")}>Guest Login</button> */}

            <button
              onClick={(e) => {
                e.preventDefault();
                submitHandler("guest");
              }}
            >
              Guest Login
            </button>
            <p className="link-text" onClick={() => navigate("/signup")}>
              Create New Account?
            </p>
          </div>
        </div>
      </form>
    </>
  );
}
