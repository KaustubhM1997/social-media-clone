import "./Landing.css";

export default function Landing() {
  return (
    <>
      <div className="info-container">
        <p className="landing-header">SocialNetwork</p>

        <p className="landing-text">
          Get in touch with lost connections, socialize with your friends, and
          share great stories with one another.
        </p>

        <a className="button-text" href="/home">
          Socialize Now
        </a>

        <a className="redirect" href="/login">
          Already have an account?
        </a>

        {/* <div className="items-container">
          <p>
            {" "}
            <span>FOLLOW </span>{" "}
          </p>
          <p>
            {" "}
            <span>CONNECT</span>{" "}
          </p>
          <p>
            {" "}
            <span>SHARE</span>{" "}
          </p>
        </div> */}
      </div>
      {/* 
      <div className="landing-container">
       

        <div className="image-container">
          <img
            src="https://images.pexels.com/photos/9783826/pexels-photo-9783826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="landing-page-img"
          />
        </div>
      </div> */}
    </>
  );
}
