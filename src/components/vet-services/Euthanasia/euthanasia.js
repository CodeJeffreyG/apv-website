import React from "react";
import "./euthanasia.css";
import ServicesFirstSection from "../reusedComponents/servicesFirstSection/ServicesFirstSection";
import ServicesSecondSection from "../reusedComponents/servicesSecondSection/ServicesSecondSection";

const Euthanasia = ({ euthanasiaData }) => {
  return (
    <div className="euthanasia-container">
      <ServicesFirstSection
        textInformation={euthanasiaData}
        image={euthanasiaData.images[0]}
      />
      <ServicesSecondSection
        textInformation={euthanasiaData}
        image={euthanasiaData.images[1]}
      />
    </div>
  );
};

export default Euthanasia;
