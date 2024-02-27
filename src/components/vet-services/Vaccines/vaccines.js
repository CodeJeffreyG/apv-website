import React from "react";
import ServicesFirstSection from "../ServicesFirstSection";
import ServicesSecondSection from "../ServicesSecondSection";
import "./vaccines.css";

const Vaccines = ({ vxData }) => {
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

export default Vaccines;
