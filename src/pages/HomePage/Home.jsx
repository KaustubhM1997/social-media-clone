import { useContext } from "react";

import "./home.css";
import SideBar1 from "../../components/SideBar1";
import SideBar2 from "../../components/SideBar2";
import NavBar from "../../components/NavBar";
import { DataContext } from "../../contexts/DataContext";
import PostCard from "../../components/PostCard";
import CreatePost from "../../components/CreatePost";

export default function Home() {
  const { posts } = useContext(DataContext);

  //FUNCTION TO FILTER PEOPLE I'M NOT FOLLOWING

  const filteredPosts = posts.filter(({ isFollowing }) => isFollowing === true);

  return (
    <>
      {/* NavBar component */}
      <NavBar />

      {/* Sidebar components */}

      <div className="main-container">
        <SideBar1 />

        <div className="explore-container">
          <ul>
            {/* COMPONENT TO ADD/CREATE POSTS */}
            <CreatePost />

            <div className="sorting-container">
              <p>Latest Posts</p>
              <p>Trending Posts</p>
            </div>

            {/* POST CARD COMPONENT */}

            {filteredPosts.map((item) => (
              <PostCard post={item} />
            ))}
          </ul>
        </div>

        <SideBar2 />
      </div>
    </>
  );
}
