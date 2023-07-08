import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

export default function SideBar2() {
  const { users } = useContext(DataContext);

  console.log(users, "users");
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
        <div className="side-bar-container-2">
          {users.map(({ avatar, firstName, lastName }) => (
            <li className="sidebar2-align">
              <img src={avatar}></img>
              <p>
                {firstName} {lastName}
              </p>
              <button>Follow</button>
            </li>
          ))}
        </div>
        {/* <div className="side-bar-container">
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
        </div> */}
      </div>
    </>
  );
}
