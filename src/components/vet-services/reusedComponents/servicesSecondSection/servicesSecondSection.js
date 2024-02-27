import React from "react";
import "../firstAndSecondSection.css";

const ServicesSecondSection = ({ textInformation, image }) => {
  return (
    <div className="section section-two">
      <div className="image-container">
        {image && <img src={image} alt="Pet" className="pet-image" />}
      </div>
      <div className="text-container">
        <h2>{textInformation.secondSectionTitle}</h2>
        <p>
          {textInformation.secondSectionInformationOne}
          <br />
          <br />
          {textInformation.secondSectionInformationTwo}
        </p>
      </div>
    </div>
  );
};

export default ServicesSecondSection;
