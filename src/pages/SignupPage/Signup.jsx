import { useContext, useEffect, useState } from "react";
import "./signup.css";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import axios from "axios";

export default function Signup() {
  const { navigate, showPassword, setShowPassword } = useContext(AuthContext);

  const { getUsers } = useContext(DataContext);

  //FOR A USER THAT WAS ALREADY LOGGED IN AND DIDN'T CLICK ON THE LOGOUT BUTTON

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  });

  //SETTING THE INITIAL VALUES OF THE INPUT FIELDS

  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  //TO HANDLE CHANGE IN SIGNUP INPUT FIELDS

  const handleChange = (e) => {
    const { value, id } = e.target;
    setNewUser((prevState) => ({ ...prevState, [id]: value }));
  };

  //TO SIGNUP THE USER

  const signupUser = async () => {
    try {
      const data = {
        firstName: newUser?.firstname,
        lastName: newUser?.lastname,
        username: newUser?.username,
        password: newUser?.password,
      };

      const response = await axios.post(`/api/auth/signup`, data);
      // console.log(response);

      if (response.status === 200) {
        getUsers();
        alert("User created successfully!");
        clearState();
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.createdUser));
        navigate("/home");
      } else {
        alert("Something went wrong, please try again later");
      }
    } catch (err) {
      console.error(err);
    }
  };

  //TO HANDLE FORM SUBMIT

  const submitHandler = (e) => {
    e.preventDefault();

    if (newUser.password === newUser.confirmPassword) {
      signupUser();
    } else {
      alert("Your password doesn't match with the confirm password");
    }
  };

  //TO CLEAR STATE ONCE USER HAS SIGNED UP

  const clearState = () => {
    setNewUser({ username: "", password: "" });
  };

  return (
    <>
      <p className="landing-header-login">SocialNetwork</p>
      <form onSubmit={submitHandler}>
        <div className="login-container">
          <h1>Signup</h1>

          <div className="field-container">
            <div>
              <p className="form-label">First Name</p>
              <input
                id="firstname"
                type="text"
                required
                value={newUser.firstname}
                onChange={(e) => handleChange(e)}
                placeholder="Enter your firstname..."
              ></input>
            </div>

            <div>
              <p className="form-label">Last Name</p>
              <input
                id="lastname"
                type="text"
                required
                value={newUser.lastname}
                onChange={(e) => handleChange(e)}
                placeholder="Enter your lastname..."
              ></input>
            </div>

            <div>
              <p className="form-label">Username</p>
              <input
                id="username"
                type="text"
                required
                value={newUser.username}
                onChange={(e) => handleChange(e)}
                placeholder="Enter your username..."
              ></input>
            </div>

            <div>
              <p className="form-label">Password</p>

              <div className="login-password">
                <input
                  id="password"
                  value={newUser.password}
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

            <div>
              <p className="form-label">Confirm Password</p>

              <div className="login-password">
                <input
                  id="confirmPassword"
                  value={newUser.confirmPassword}
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
            <button className="signup-button" type="submit">
              Create New Account
            </button>
            <p className="link-text" onClick={() => navigate("/login")}>
              Already have an account?
            </p>
          </div>
        </div>
      </form>
    </>
  );
}
