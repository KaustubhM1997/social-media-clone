import "./Home.css";
// import Login from "../Login/login";
import SideBar1 from "../../components/SideBar1";
import SideBar2 from "../../components/SideBar2";
import NavBar from "../../components/NavBar";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import PostCard from "../../components/PostCard";
export default function Home() {
  const { posts } = useContext(DataContext);

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

// AXIOS GET PRACTICE

// useEffect(() => {
//   const getData = async () => {
//     try {
//       const res = await axios.get("/api/posts");

//       if (res.status === 200) {
//         console.log(res);
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   getData();
// }, []);
