import React from "react";
import imageOne from "../media/carousel-images/staffDogs/hazel-zeke-danielle.jpg";
import imageTwo from "../media/carousel-images/staff/Kim-With-Dog.jpg";
import "./wellness.css";

const wellness = ({ textInformation }) => {
  return (
    <div className="wellness-visit-container">
      {/* Section One */}
      <div className="section section-one">
        <div className="text-container">
          <h1>{textInformation.firstSectionTitle}</h1>
          <p>{textInformation.firstSectionInformation}</p>
        </div>
        <div className="image-container">
          {imageOne && <img src={imageOne} alt="Pet" className="pet-image" />}
        </div>
      </div>

      {/* Section Two */}
      <div className="section section-two">
        <div className="image-container">
          {imageTwo && <img src={imageTwo} alt="Pet" className="pet-image" />}
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
    </div>
  );
};

export default wellness;
