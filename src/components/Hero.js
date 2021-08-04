import Background from "../images/homepage.jpg";
import "../index.css";

const Hero = () => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Background})`,
      }}
    >
      <div className="heroContent">
        <h1>Welcome to DevCircle</h1>
        <p>A hub for the next generation of developers.</p>
        <a href="/signup">Sign up</a>
      </div>
    </div>
  );
};

export default Hero;
