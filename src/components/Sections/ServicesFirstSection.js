import React from "react";
import "./firstAndSecondSection.css";

const ServicesFirstSection = ({ textInformation, image }) => {
  return (
    <div className="section section-one">
      <div class="diagonal-hero-bg">
        <div class="stars">
          <div class="small"></div>
          <div class="medium"></div>
          <div class="big"></div>
        </div>
      </div>

      <div className="text-container">
        <h1>{textInformation.firstSectionTitle}</h1>
        <p>{textInformation.firstSectionInformation}</p>
      </div>
      <div className="image-container">
        {image && <img src={image} alt="Pet" className="pet-image" />}
      </div>
    </div>
  );
};

export default ServicesFirstSection;
