export default function SideBar1() {
  return (
    <>
      <div className="side-bar">
        <div className="filling">
          <div className="side-bar-container">
            <i className="side-bar-icon" class="fa-solid fa-house"></i>

            <p>Home</p>
          </div>
          <div className="side-bar-container">
            <i className="side-bar-icon" class="fa-solid fa-compass"></i>
            <p>Explore</p>
          </div>
          <div className="side-bar-container">
            <i className="side-bar-icon" class="fa-solid fa-bookmark"></i>
            <p>Bookmarks</p>
          </div>
          <div className="side-bar-container">
            <i className="side-bar-icon" class="fa-solid fa-user"></i>
            <p>Profile</p>
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
