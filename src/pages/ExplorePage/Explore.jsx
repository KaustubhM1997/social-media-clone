import axios from "axios";
import { useContext, useEffect, useState } from "react";

import NavBar from "../../components/NavBar";
import SideBar1 from "../../components/SideBar1";
import SideBar2 from "../../components/SideBar2";
import "./explore.css";

import { DataContext } from "../../contexts/DataContext";
import PostCard from "../../components/PostCard";

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
  // const [users, setUsers] = useState([]);

  const { posts } = useContext(DataContext);

  //START FROM HERE -> WORK ON THIS FUNCTION FOR BOOKMARKS

  // const addBookMark = async (postId) => {
  //   try {
  //     const res = await axios.post(`/api/users/bookmark/${postId}`);

  //     const { data } = await res.json(); //I WILL GET THE BOOKMARKS HERE
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // //FUNCTION TO FILTER USERS I'M NOT FOLLOWING

  // const followedUsers = posts.filter(
  //   ({ isFollowing }) => isFollowing === false
  // );

  return (
    <>
      <NavBar />

      <div className="main-container">
        <SideBar1 />

        {/* PASSING POST ITEMS TO THE CARD COMPONENT AS A PROP */}

        <div className="explore-container">
          <ul>
            {posts.map((item) => (
              <PostCard post={item} />
            ))}
          </ul>
        </div>

        <SideBar2 />
      </div>
    </>
  );
}

{
  /* <li className="lists" key={id}>
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
    <p>{content}</p>
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
</li> */
}
