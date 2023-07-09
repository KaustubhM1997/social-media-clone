import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function PostCard({ post }) {
  const { id, content, firstName, lastName, createdAt, avatar } = post;
  const { navigate } = useContext(AuthContext);

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
            <span onClick={() => navigate("/bookmarks")}>
              <i class="fa-regular fa-bookmark"></i>
            </span>
          </div>
        </div>
      </li>
    </>
  );
}
