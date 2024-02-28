import React from "react";
import ServicesFirstSection from "../ServicesFirstSection";
import ServicesSecondSection from "../ServicesSecondSection";
import "./wellness.css";

const Wellness = ({ wellnessData }) => {
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

export default Wellness;
