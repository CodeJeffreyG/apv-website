import React from "react";
import "./exotic.css";
import ServicesFirstSection from "../reusedComponents/servicesFirstSection/ServicesFirstSection";
import ServicesSecondSection from "../reusedComponents/servicesSecondSection/ServicesSecondSection";

export default function Exotic({ exoticData }) {
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
}
