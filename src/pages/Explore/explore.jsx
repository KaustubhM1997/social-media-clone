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

        {/* <div>
          {users.map(({ bio, id, username }) => (
            <li key={id}>
              <p>{bio}</p>
              <p>{username}</p>
            </li>
          ))}
        </div> */}

        <div className="explore-container">
          <div className="card-container">
            {users.map(({ bio, id, username }) => (
              <li key={id}>
                <p>{bio}</p>
                <p>{username}</p>
              </li>
            ))}

            <div className="row-1">
              <div className="flex-cont">
                <img src="" alt="" />
                <p>Name</p>
                <span>Date</span>
              </div>

              <div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>

            <div className="row-2">
              <p>
                As opposed to using 'Content here, content here', making it look
                like readable English. Many desktop publishing packages and web
                page editors now use Lorem Ipsum as their default model text,
                and a search f
              </p>
            </div>

            <div className="row-3">
              <i class="fa-regular fa-heart"></i>

              <i class="fa-regular fa-comment"></i>
              <i class="fa-solid fa-share"></i>
              <i class="fa-regular fa-bookmark"></i>
            </div>
          </div>

          {/* <div>
            {users.map(({ bio, id, username }) => (
              <li key={id}>
                <p>{bio}</p>
                <p>{username}</p>
              </li>
            ))}
          </div> */}
        </div>

        <SideBar2 />
      </div>
    </>
  );
}
