import ServicesFirstSection from "../ServicesFirstSection";
import ServicesSecondSection from "../ServicesSecondSection";
import "./dentalcare.css";

const DentalCare = ({ dentalCareData }) => {
  return (
    <div className="spayNeuter-container">
      <ServicesFirstSection
        textInformation={dentalCareData}
        image={dentalCareData.images[0]}
      />
      <ServicesSecondSection
        textInformation={dentalCareData}
        image={dentalCareData.images[1]}
      />
    </div>
  );
};

export default DentalCare;
