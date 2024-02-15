import React from "react";
import "../firstAndSecondSection.css"

const servicesFirstSection = ({ textInformation, image }) => {
  return (
    <div className="section section-one">
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

export default servicesFirstSection;
