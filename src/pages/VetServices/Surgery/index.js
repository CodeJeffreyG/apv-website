import React from "react";
import "./surgery.css";
import ServicesFirstSection from "../../../components/Sections/ServicesFirstSection";
import ServicesSecondSection from "../../../components/Sections/ServicesSecondSection";

const Surgery = ({ surgeryData }) => {
  return (
    <div className="surgery-container">
      <ServicesFirstSection
        image={surgeryData.images[0]}
        textInformation={surgeryData}
      />
      <ServicesSecondSection
        image={surgeryData.images[1]}
        textInformation={surgeryData}
      />
    </div>
  );
};

export default Surgery;
