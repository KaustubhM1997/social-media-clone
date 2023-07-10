import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

//THE RIGHT SIDE BAR
export default function SideBar2() {
  const { users } = useContext(DataContext);
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
      </div>
    </>
  );
}
