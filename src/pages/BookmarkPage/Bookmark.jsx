import { useContext, useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import SideBar1 from "../../components/SideBar1";
import SideBar2 from "../../components/SideBar2";
import "./bookmark.css";
import { DataContext } from "../../contexts/DataContext";
import PostCard from "../../components/PostCard";

export default function Bookmark() {
  const { posts, users, addBookmark, bookmarkedPost, removeBookmark } =
    useContext(DataContext);
  const [onlyBookmarkedPosts, setOnlyBookmarkedPosts] = useState([]); //to store bookmarked posts only and not all the posts

  //TO SHOW ALL INFO WE NEED TO MAP BOOKMARK ARRAY ONTO THE POSTS ARRAY BY ID, AS THE POSTS BACKEND ARRAY HAS ALL THE ELEMENTS

  console.log(onlyBookmarkedPosts, "SEE");

  useEffect(() => {
    let filterArray = [];
    for (let i = 0; i < bookmarkedPost.length; i++) {
      //length of the bookmark array from backend api
      for (let j = 0; j < posts.length; j++) {
        if (bookmarkedPost[i]._id === posts[j]._id) {
          filterArray.push(posts[j]);
        }
      }
    }

    setOnlyBookmarkedPosts(() => filterArray);
  }, [bookmarkedPost, posts]); //WHENEVER BOOKMARKS OR POSTS IN THE BACKEND CHANGES, THIS WILL RENDER
  return (
    <>
      <NavBar />

      <div className="main-container">
        <SideBar1 />

        <div className="explore-container">
          <ul>
            {onlyBookmarkedPosts?.length > 0
              ? onlyBookmarkedPosts.map((item) => <PostCard post={item} />)
              : ""}
          </ul>
        </div>
        <SideBar2 />
      </div>
    </>
  );
}
