import React from "react";
import ServicesFirstSection from "../../../components/Sections/ServicesFirstSection";
import ServicesSecondSection from "../../../components/Sections/ServicesSecondSection";
import "./laserTherapy.css";

const LaserTherapy = ({ laserTherapyData }) => {
  return (
    <div className="laserTherapy-container">
      <ServicesFirstSection
        image={laserTherapyData.images[0]}
        textInformation={laserTherapyData}
      />
      <ServicesSecondSection
        image={laserTherapyData.images[1]}
        textInformation={laserTherapyData}
      />
    </div>
  );
};

export default LaserTherapy;
