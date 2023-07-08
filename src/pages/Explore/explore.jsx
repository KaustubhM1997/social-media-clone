import axios from "axios";
import { useContext, useEffect, useState } from "react";

import NavBar from "../../components/NavBar";
import SideBar1 from "../../components/SideBar1";
import SideBar2 from "../../components/SideBar2";
import "./Explore.css";
import { AuthContext } from "../../contexts/AuthContext";

// const response = await axios.post(
//   `/api/users/bookmark/${postId}`,
//   {},
//   {
//     headers: {
//       authorization: encodedToken,
//     },
//   }
// );

// axios.post("/api/users/bookmark/:postId");

export default function Explore() {
  const [users, setUsers] = useState([]);
  const userData = async () => {
    try {
      const res = await axios.get("/api/users");

      if (res.status === 200) {
        console.log(res.data.users);
        setUsers(res.data.users);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    userData();
  }, []);
  const { navigate } = useContext(AuthContext);

  //START FROM HERE -> WORK ON THIS FUNCTION FOR BOOKMARKS

  // const addBookMark = async (postId) => {
  //   try {
  //     const res = await axios.post(`/api/users/bookmark/${postId}`);

  //     const { data } = await res.json(); //I WILL GET THE BOOKMARKS HERE
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  //STEP 1--> CREATE DATA CONTEXT WHERE ALL THE DATA WILL LIE
  // STEP 2 --> CREATE ALL THIS IN DATA CONTEXT AND THEN MOVE IT ALL AROUND
  // STEP 3 --> CHANGE ALL FILE NAMES TO STARTING WITH CAPS
  //STEP 4 --> MAP POSTS DATA ON EXPLORE PAGE AND NOT USERS DATA
  // STEP 5 --> CREATE A COMPONENT FOR THE CARD
  return (
    <>
      <NavBar />

      <div className="main-container">
        <SideBar1 />

        {/* FETCHING DATA FROM BACKEND AND MAPPING HERE FOR EXPLORE */}

        <div className="explore-container">
          <ul>
            {users.map(
              ({
                bio,
                id,
                firstName,
                lastName,
                createdAt,
                avatar,
                following,
                isFollowing,
              }) => {
                return isFollowing ? (
                  <li className="lists" key={id}>
                    <div className="card-container">
                      <div className="row-1">
                        <div className="flex-cont">
                          <img src="" alt="" />
                          <p>
                            {firstName} {""}
                            {lastName}
                          </p>
                          <span>{new Date(createdAt).toDateString()}</span>
                        </div>

                        <div>
                          <i class="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                      </div>

                      <div className="row-2">
                        <p>{bio}</p>
                      </div>

                      <div className="row-3">
                        <i class="fa-regular fa-heart"></i>

                        <i class="fa-regular fa-comment"></i>
                        <i class="fa-solid fa-share"></i>
                        <span onClick={() => navigate("/login")}>
                          <i class="fa-regular fa-bookmark"></i>
                        </span>
                      </div>
                    </div>
                  </li>
                ) : (
                  <>
                    <></>
                  </>
                );
              }
            )}
          </ul>
        </div>

        <SideBar2 />
      </div>
    </>
  );
}

// {following && <li className="lists" key={id}>
// <div className="card-container">
//   <div className="row-1">
//     <div className="flex-cont">
//       <img src="" alt="" />
//       <p>
//         {firstName} {""}
//         {lastName}
//       </p>
//       <span>{new Date(createdAt).toDateString()}</span>
//     </div>

//     <div>
//       <i class="fa-solid fa-ellipsis-vertical"></i>
//     </div>
//   </div>

//   <div className="row-2">
//     <p>{bio}</p>
//   </div>

//   <div className="row-3">
//     <i class="fa-regular fa-heart"></i>

//     <i class="fa-regular fa-comment"></i>
//     <i class="fa-solid fa-share"></i>
//     <span onClick={() => navigate("/login")}>
//       <i class="fa-regular fa-bookmark"></i>
//     </span>
//   </div>
// </div>
// </li>}
