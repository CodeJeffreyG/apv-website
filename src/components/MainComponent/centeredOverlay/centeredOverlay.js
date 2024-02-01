import React from "react";
import "./centeredOverlay.css"; // Import the CSS file

const CenteredOverlay = () => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>Your pet is always there for you.</h2>
        <p>
          We'll be there for both of you - We'll provide the best medical care
          for your pet.
        </p>
        <div>
          <button className="overlay-button">DIRECTIONS</button>
          <button className="overlay-button">CALL NOW</button>
        </div>
      </div>
    </div>
  );
};

export default CenteredOverlay;
