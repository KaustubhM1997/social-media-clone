import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/Signup";
import Explore from "./pages/Explore/explore";

function App() {
  return (
    <div className="main-app">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
}

export default App;
