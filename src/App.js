import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.js";
import MainComponent from "./components/MainComponent/maincomponent.js";
import Wellness from "./components/Wellness/wellness.js";
function App() {
  const services = {
    wellness: {
      firstSectionTitle: "Pet Exams at All Pets Vet",
      firstSectionInformation:
        "At All Pets Veterinary Hospital, we strive for customized service in all aspects of our care...",
      secondSectionTitle: "Preventing Issues with Pet Exams and Wellness Care",
      secondSectionInformationOne:
        "Sometimes a pet wellness exam may alert us to underlying medical conditions in your companion. The earlier we catch things like cancerous tumors and dental disease, the easier it is to treat your pet. You can potentially prevent larger medical issues when you bring your companion in for annual exams and we’ll run the proper diagnostics to accurately diagnose any illness.",
      secondSectionInformationTwo:
        "Pet wellness care is also the time to address preventative care for things like fleas, ticks and heartworms. Spaying and neutering may also prevent medical and behavioral conditions. During a wellness exam, we’ll advise you on the best time to have this surgery for your breed and type of pet. We’ll discuss a vaccination schedule for new puppies and kittens to protect them from dangerous diseases and update boosters for adult pets. If your pet has entered into their senior years, we recommend semi-annual wellness exams to give your companion the best care possible.",
    },
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route
          path="/services/wellness"
          element={<Wellness textInformation={services.wellness} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
