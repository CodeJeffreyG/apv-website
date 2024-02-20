import React from "react";
import "./microchipping.css";
import ServicesFirstSection from "../reusedComponents/servicesFirstSection/servicesFirstSection";
import ServicesSecondSection from "../reusedComponents/servicesSecondSection/servicesSecondSection";
const microchipping = ({ microchippingData }) => {
    
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

export default microchipping;
