import React from "react";
import "./hospice.css";
import ServicesFirstSection from "../../../components/Sections/ServicesFirstSection";
import ServicesSecondSection from "../../../components/Sections/ServicesSecondSection";

const Hospice = ({ hospiceData }) => {
  return (
    <div className="hospice-container">
      <ServicesFirstSection
        textInformation={hospiceData}
        image={hospiceData.images[0]}
      />
      <ServicesSecondSection
        textInformation={hospiceData}
        image={hospiceData.images[1]}
      />
    </div>
  );
};

export default Hospice;
