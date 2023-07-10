import { Routes, Route } from "react-router-dom";

import "./App.css";
import Landing from "./pages/LandingPage/Landing";
import Home from "./pages/HomePage/Home";
import Signup from "./pages/SignupPage/Signup";
import Explore from "./pages/ExplorePage/Explore";
import Bookmark from "./pages/BookmarkPage/Bookmark";
import UserProfile from "./pages/UserProfilePage/UserProfile";
import NotFound from "./pages/NotFoundPage/NotFound";
import { Login } from "./pages/LoginPage/Login";

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
