import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

export default function PostCard({ post }) {
  const { _id, content, firstName, lastName, createdAt, avatar } = post;
  const { bookmarkedPost, removeBookmark, addBookmark } =
    useContext(DataContext);

  return (
    <>
      <li className="lists" key={_id}>
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

            {bookmarkedPost.find(
              (bookmarkPost) => bookmarkPost?._id === _id
            ) ? (
              <i
                className="fa-solid fa-bookmark"
                onClick={() => removeBookmark(_id)}
              ></i>
            ) : (
              <i
                className="fa-regular fa-bookmark"
                onClick={() => addBookmark(_id)}
              ></i>
            )}
          </div>
        </div>
      </li>
    </>
  );
}
