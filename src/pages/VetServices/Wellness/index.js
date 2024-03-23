import React from "react";
import ServicesFirstSection from "../../../components/Sections/ServicesFirstSection";
import ServicesSecondSection from "../../../components/Sections/ServicesSecondSection";
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
