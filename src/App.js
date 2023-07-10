import { Routes, Route } from "react-router-dom";

import "./App.css";

import Landing from "./pages/LandingPage/Landing.jsx";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Explore from "./pages/Explore/Explore";
import Bookmark from "./pages/Bookmark/Bookmark";
import UserProfile from "./pages/UserProfile/UserProfile";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="main-app">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmarks" element={<Bookmark />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
