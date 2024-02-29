import ServicesFirstSection from "../ServicesFirstSection";
import ServicesSecondSection from "../ServicesSecondSection";
import "./surgery.css";

const Surgery = ({ surgeryData }) => {
  return (
    <div className="surgery-container">
      <ServicesFirstSection
        textInformation={surgeryData}
        image={surgeryData.images[0]}
      />
      <ServicesSecondSection
        textInformation={surgeryData}
        image={surgeryData.images[1]}
      />
    </div>
  );
};

export default Surgery;
