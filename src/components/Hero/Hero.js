import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero-content">
      <div className="hero-items">
        <h1>
          Our Pet <span style={{ color: "#FDC501" }}> Is Always </span> There
          For You
        </h1>
        <p>
          {" "}
          We'll be there for both of you - We'll provide the best medical care
          for your pet.
        </p>
        <div className="button-container">
          <button
            onClick={() => {
              navigate("/food/all");
            }}
          >
            Directions
          </button>
          <button
            className="call-now-btn"
            onClick={() => {
              navigate("/food/all");
            }}
          >
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
