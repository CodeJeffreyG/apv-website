import React from "react";

import ServicesFirstSection from "../vet-services/servicesFirstSection/servicesFirstSection";
import ServicesSecondSection from "../vet-services/servicesSecondSection/servicesSecondSection";
import "./wellness.css";

const wellness = ({ wellnessData }) => {
  const [imageOne, imageTwo] = wellnessData.images;

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
