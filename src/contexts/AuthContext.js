import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" }); // SETTING INITIAL STATE OF USER TO EMPTY

  const [token, setToken] = useState(null); //STATE TO STORE TOKEN FROM LOCAL STORAGE ON LOGIN

  const [loggendInUser, setLoggedInUser] = useState(null); //STATE OF THE LOGGED IN USER

  //FUNCTION FOR GUEST LOGIN and POSTING ON BACKEND
  const guestLogin = async () => {
    try {
      const data = { username: "adarshbalika", password: "adarshBalika123" };

      const response = await axios.post(`/api/auth/login`, data); // posting on the backend

      if (response.status === 200) {
        // console.log(response, "FIND");
        //WE GET THE ENCODED TOKEN AND USER DETAILS HERE
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.foundUser)); //converting object to string using stringify
        setToken(response.data.encodedToken);
        clearState();
        navigate("/home");
      }
    } catch (err) {
      console.error(err);
    }
  };

  //FUNCTION TO CAPTURE/CHECK USER DETAILS THAT ARE LOGGING IN AND POST ON BACKEND

  const checkUser = async () => {
    try {
      const data = {
        username: user.username,
        password: user.password,
      };

      const response = await axios.post(`/api/auth/login`, data);

      if (response.status === 200) {
        // console.log(response, "GO!!");
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.foundUser));
        setToken(response.data.encodedToken);
        clearState();
        navigate("/home");
      }
    } catch (err) {
      console.error(err);
    }
  };

  //FUNCTION TO ALLOW LOGGEDIN USER TO ACCESS PAGES ON REFRESH OR CHECK WHETHER USER IS LOGGED IN OR NOT

  useEffect(() => {
    const loginToken = localStorage.getItem("token");
    if (loginToken) {
      setToken(loginToken);
    }

    const person = localStorage.getItem("user");
    if (person) {
      setLoggedInUser(JSON.parse(person)); //converting string to object
    }
  }, []);

  // TO CLEAR THE LOGIN FIELDS ONCE LOGGED IN
  const clearState = () => setUser({ username: "", password: "" });

  return (
    <AuthContext.Provider
      value={{ navigate, guestLogin, token, user, checkUser, loggendInUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
