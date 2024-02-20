import ServicesFirstSection from "../vet-services/reusedComponents/servicesFirstSection/servicesFirstSection";
import ServicesSecondSection from "../vet-services/reusedComponents/servicesSecondSection/servicesSecondSection";
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
