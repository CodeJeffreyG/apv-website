import React from "react";
import "./microchipping.css";
import ServicesFirstSection from "../reusedComponents/servicesFirstSection/ServicesFirstSection";
import ServicesSecondSection from "../reusedComponents/servicesSecondSection/ServicesSecondSection";
const Microchipping = ({ microchippingData }) => {
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

export default Microchipping;
