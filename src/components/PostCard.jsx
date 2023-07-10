import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { DataContext } from "../contexts/DataContext";

export default function PostCard({ post }) {
  const { id, content, firstName, lastName, createdAt, avatar } = post;
  const { navigate } = useContext(AuthContext);
  const { bookmarkedPost, removeBookmark, addBookmark } = useContext(DataContext);

  // const loggedInUser = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <li className="lists" key={id}>
        <div className="card-container">
          <div className="row-1">
            <div className="flex-cont">
              <img src={avatar} alt="display photo" />
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
            {bookmarkedPost.find((bookmarkPost) => bookmarkPost?_.id === id) ? (<i className="fa-solid fa-bookmark" onClick={() => removeBookmark(id)}></i>)  : ( <i className="fa-regular fa-bookmark" onClick={() => addBookmark(id)}></i>)}

       
           
          </div>
        </div>
      </li>
    </>
  );
}


// (bookmarkPost) => bookmarkPost?_.id === post?_id ? "": ""

 {/* <span onClick={() => navigate("/bookmarks")}>
              <i class="fa-regular fa-bookmark"></i>
            </span> */}
