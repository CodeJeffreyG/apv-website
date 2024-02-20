import React from "react";
import "./exotic.css";
import ServicesFirstSection from "../reusedComponents/servicesFirstSection/servicesFirstSection";
import ServicesSecondSection from "../reusedComponents/servicesSecondSection/servicesSecondSection";

const exotic = ({ exoticData }) => {
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

export default exotic;
