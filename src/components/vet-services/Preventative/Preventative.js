import React from "react";
import ServicesFirstSection from "../ServicesFirstSection";
import ServicesSecondSection from "../ServicesSecondSection";
import "./preventative.css";

const Preventative = ({ preventativeData }) => {
  return (
    <div className="preventative-container">
      <ServicesFirstSection textInformation={preventativeData} image={preventativeData.images[0]} />
      <ServicesSecondSection
        textInformation={preventativeData}
        image={preventativeData.images[1]}
      />
    </div>
  );
};

export default Preventative;
