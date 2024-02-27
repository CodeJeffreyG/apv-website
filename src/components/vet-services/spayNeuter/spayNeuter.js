import ServicesFirstSection from "../reusedComponents/servicesFirstSection/servicesFirstSection";
import ServicesSecondSection from "../reusedComponents/servicesSecondSection/servicesSecondSection";
import "./spayNeuter.css";

const SpayNeuter = ({ spayNeuterData }) => {
  return (
    <div className="spayNeuter-container">
      <ServicesFirstSection
        textInformation={spayNeuterData}
        image={spayNeuterData.images[0]}
      />
      <ServicesSecondSection
        textInformation={spayNeuterData}
        image={spayNeuterData.images[1]}
      />
    </div>
  );
};

export default SpayNeuter;
