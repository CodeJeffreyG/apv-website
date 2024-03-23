import React from "react";
import "./microchipping.css";
import ServicesFirstSection from "../../../components/Sections/ServicesFirstSection";
import ServicesSecondSection from "../../../components/Sections/ServicesSecondSection";
const MicroChipping = ({ microchippingData }) => {
  return (
    <div className="microchipping-container">
      <ServicesFirstSection
        image={microchippingData.images[0]}
        textInformation={microchippingData}
      />
      <ServicesSecondSection
        image={microchippingData.images[1]}
        textInformation={microchippingData}
      />
    </div>
  );
};

export default MicroChipping;
