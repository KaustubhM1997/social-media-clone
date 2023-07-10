import { useContext } from "react";
import "./landing.css";
import { AuthContext } from "../../contexts/AuthContext";

export default function Landing() {
  const { navigate } = useContext(AuthContext);

  const landingImage =
    "https://img.freepik.com/free-vector/social-media-network_74855-4575.jpg?size=626&ext=jpg&ga=GA1.1.1146484037.1688843690&semt=ais";
  return (
    <>
      <div className="landing-container">
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

        <div>
          <img src={landingImage} alt="landing image" />
        </div>
      </div>
    </>
  );
}
