import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hero-content">
      <div className="hero-items">
        <h1>
          Your Pet <span style={{ color: "#74d3f2" }}> Is Always </span> There
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
              navigate("/contact");
            }}
          >
            Directions
          </button>

          {screenWidth > 768 ? (
            <button
              className="call-now-btn"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Call Now
            </button>
          ) : (
            <a href="href=tel:+4844677520">
              <button className="call-now-btn">Call Now</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
