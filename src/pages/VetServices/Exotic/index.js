import React from "react";
import "./exotic.css";
import ServicesFirstSection from "../../../components/Sections/ServicesFirstSection";
import ServicesSecondSection from "../../../components/Sections/ServicesSecondSection";

const Exotic = ({ exoticData }) => {
  return (
    <div className="exotic-container">
      <ServicesFirstSection
        image={exoticData.images[0]}
        textInformation={exoticData}
      />
      <ServicesSecondSection
        image={exoticData.images[1]}
        textInformation={exoticData}
      />
    </div>
  );
};

export default Exotic;
