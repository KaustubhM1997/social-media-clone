import "./home.css";
export default function Home() {
  return (
    <>
      {/* nav component */}
      <nav className="navbar">
        <p className="nav-header">SocialNetwork</p>

        <a className="nav-element" href="#">
          <i class="fa-solid fa-right-from-bracket"></i>
        </a>
      </nav>

      {/* Sidebar components */}

      <div className="main-container">
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

        <div className="side-bar">
          <div className="side-bar-container">
            <input
              className="search-user"
              type="search"
              placeholder="Search Posts & People"
            />
          </div>

          <div className="side-bar-container">
            <p className="suggested-users">Whom to follow</p>
          </div>

          {/* This data needs to come dynamically from the backend */}
          <div className="side-bar-container">
            <img></img>
            <p>User's name</p>
            <button>Follow</button>
          </div>
          <div className="side-bar-container">
            <img></img>
            <p>User's name</p>
            <button>Follow</button>
          </div>
          <div className="side-bar-container">
            <img></img>
            <p>User's name</p>
            <button>Follow</button>
          </div>
          <div className="side-bar-container">
            <img></img>
            <p>User's name</p>
            <button>Follow</button>
          </div>
        </div>
      </div>
    </>
  );
}
