export default function SideBar2() {
  return (
    <>
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
    </>
  );
}
