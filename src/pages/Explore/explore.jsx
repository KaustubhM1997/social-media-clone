import axios from "axios";

import NavBar from "../../components/NavBar";
import SideBar1 from "../../components/SideBar1";
import SideBar2 from "../../components/SideBar2";
import "./explore.css";
import { useEffect, useState } from "react";

export default function Explore() {
  const [users, setUsers] = useState([]);
  const userData = async () => {
    try {
      const res = await axios.get("/api/users");

      if (res.status === 200) {
        setUsers(res.data.users);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    userData();
  }, []);
  return (
    <>
      <NavBar />

      <div className="main-container">
        <SideBar1 />

        <div className="explore-container">
          <div>
            {users.map(({ bio, id, username }) => (
              <li key={id}>
                <p>{bio}</p>
                <p>{username}</p>
              </li>
            ))}
          </div>
        </div>

        <SideBar2 />
      </div>
    </>
  );
}
