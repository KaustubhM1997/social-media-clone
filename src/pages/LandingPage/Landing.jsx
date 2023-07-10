import { useContext } from "react";
import "./landing.css";
import { AuthContext } from "../../contexts/AuthContext";

export default function Landing() {
  const { navigate } = useContext(AuthContext);
  return (
    <>
      <div className="info-container">
        <p className="landing-header">SocialNetwork</p>

        <p className="landing-text">
          Get in touch with lost connections, socialize with your friends, and
          share great stories with one another.
        </p>

        <a onClick={() => navigate("/signup")} className="button-text">
          Socialize Now
        </a>

        <a onClick={() => navigate("/login")} className="redirect">
          Already have an account?
        </a>
      </div>
    </>
  );
}
