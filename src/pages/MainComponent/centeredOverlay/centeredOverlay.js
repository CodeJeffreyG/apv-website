import React from "react";
import "./centeredOverlay.css"; // Import the CSS file
import Hero from "../../../components/Hero/Hero";

const CenteredOverlay = () => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <Hero />
      </div>
    </div>
  );
};

export default CenteredOverlay;
