import React from "react";
import ServicesFirstSection from "../reusedComponents/servicesFirstSection/servicesFirstSection";
import ServicesSecondSection from "../reusedComponents/servicesSecondSection/servicesSecondSection";
import "./wellness.css";

const wellness = ({ wellnessData }) => {
  return (
    <div className="wellness-visit-container">
      <ServicesFirstSection
        textInformation={wellnessData}
        image={wellnessData.images[0]}
      />
      <ServicesSecondSection
        textInformation={wellnessData}
        image={wellnessData.images[1]}
      />
    </div>
  );
};

export default wellness;
