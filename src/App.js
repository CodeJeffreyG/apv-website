import { BrowserRouter, Routes, Route } from "react-router-dom";
import { services } from "./components/vet-services/allServicesData.js";
import Navbar from "./components/navbar/navbar.js";
import MainComponent from "./components/MainComponent/maincomponent.js";
import Wellness from "./components/vet-services/Wellness/wellness.js";
import Vaccines from "./components/vet-services/Vaccines/vaccines.js";
import SpayNeuter from "./components/vet-services/SpayNeuter/spayNeuter.js";
import Dentalcare from "./components/vet-services/Dental/dentalcare.js";
import LaserTherapy from "./components/vet-services/LaserTherapy/laserTherapy.js";
import Microchipping from "./components/vet-services/Microchipping/microchipping.js";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route
          path="/services/wellness"
          element={<Wellness wellnessData={services.wellness} />}
        />
        <Route
          path="/services/vaccines"
          element={<Vaccines vxData={services.vaccines} />}
        />
        <Route
          path="/services/spay-neuter"
          element={<SpayNeuter spayNeuterData={services.spayNeuter} />}
        />
        <Route
          path="/services/dental-care"
          element={<Dentalcare dentalCareData={services.dentalCare} />}
        />
        <Route
          path="/services/laser-therapy"
          element={<LaserTherapy laserTherapyData={services.laserTherapy} />}
        />
        <Route
          path="/services/microchipping"
          element={<Microchipping microchippingData={services.microchipping} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
