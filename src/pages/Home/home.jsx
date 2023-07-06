import "./home.css";
import Login from "../Login/login";
import SideBar1 from "../../components/SideBar1";
import SideBar2 from "../../components/SideBar2";
import NavBar from "../../components/NavBar";
export default function Home() {
  return (
    <>
      {/* NavBar component */}
      <NavBar />

      {/* Sidebar components */}

      <div className="main-container">
        <SideBar1 />

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
