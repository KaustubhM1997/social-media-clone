import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";

function App() {
  return (
    <div className="main-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Home />
    </div>
  );
}

export default App;
