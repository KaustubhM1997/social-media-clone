import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

//THE LEFT SIDE BAR

export default function SideBar1() {
  const { navigate } = useContext(AuthContext);
  return (
    <>
      <div className="side-bar">
        <div className="filling">
          <div className="side-bar-container">
            <i className="side-bar-icon" class="fa-solid fa-house"></i>

            <p onClick={() => navigate("/home")}>Home</p>
          </div>
          <div className="side-bar-container">
            <i className="side-bar-icon" class="fa-solid fa-compass"></i>
            <p onClick={() => navigate("/explore")}>Explore</p>
          </div>
          <div className="side-bar-container">
            <i className="side-bar-icon" class="fa-solid fa-bookmark"></i>
            <p onClick={() => navigate("/bookmarks")}>Bookmarks</p>
          </div>
          <div className="side-bar-container">
            <i className="side-bar-icon" class="fa-solid fa-user"></i>
            <p onClick={() => navigate("/profile")}>Profile</p>
          </div>
          <div className="side-bar-container">
            <i class="fa-solid fa-plus"></i>
            <button>Create Post</button>
          </div>
        </div>
      </div>
    </>
  );
}
