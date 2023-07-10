import axios from "axios";
import { useContext, useEffect, useState } from "react";

import NavBar from "../../components/NavBar";
import SideBar1 from "../../components/SideBar1";
import SideBar2 from "../../components/SideBar2";
import "./explore.css";

import { DataContext } from "../../contexts/DataContext";
import PostCard from "../../components/PostCard";

export default function Explore() {
  const { posts } = useContext(DataContext);

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
