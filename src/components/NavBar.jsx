import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

export default function NavBar() {
  const { navigate } = useContext(AuthContext);
  return (
    <>
      <nav className="navbar">
        <p onClick={() => navigate("/")} className="nav-header">
          SocialNetwork
        </p>

        <a
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
          className="nav-element"
        >
          <i class="fa-solid fa-right-from-bracket"></i>
        </a>
      </nav>
    </>
  );
}
