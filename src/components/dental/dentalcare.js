import ServicesFirstSection from "../vet-services/servicesFirstSection/servicesFirstSection";
import ServicesSecondSection from "../vet-services/servicesSecondSection/servicesSecondSection";
import "./dentalcare.css";

const dentalcare = ({ dentalCareData }) => {
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

export default dentalcare;
