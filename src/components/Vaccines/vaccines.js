import React from "react";
import ServicesFirstSection from "../vet-services/servicesFirstSection/servicesFirstSection";
import ServicesSecondSection from "../vet-services/servicesSecondSection/servicesSecondSection";

const vaccines = () => {
  return (
    <div className="vaccines-container">
      <ServicesFirstSection />
      <ServicesSecondSection />
    </div>
  );
};

export default vaccines;
