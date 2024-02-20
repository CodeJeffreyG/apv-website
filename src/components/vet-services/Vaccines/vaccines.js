import React from "react";
import ServicesFirstSection from "../reusedComponents/servicesFirstSection/servicesFirstSection";
import ServicesSecondSection from "../reusedComponents/servicesSecondSection/servicesSecondSection";
import "./vaccines.css";

const vaccines = ({ vxData }) => {
  return (
    <div className="vaccines-visit-container">
      <ServicesFirstSection textInformation={vxData} image={vxData.images[0]} />
      <ServicesSecondSection
        textInformation={vxData}
        image={vxData.images[1]}
      />
    </div>
  );
};

export default vaccines;
