import { BrowserRouter, Routes, Route } from "react-router-dom";
import { services } from "./components/vet-services/allServicesData.js";

//nav
import Navbar from "./components/navbar/navbar.js";
//nav

//main
import MainComponent from "./components/MainComponent/maincomponent.js";
//main

//services
import Wellness from "./components/vet-services/Wellness/wellness.js";
import Exotic from "./components/vet-services/Exotic/exotic.js";
import Vaccines from "./components/vet-services/Vaccines/vaccines.js";
import SpayNeuter from "./components/vet-services/SpayNeuter/spayNeuter.js";
import Dentalcare from "./components/vet-services/Dental/dentalcare.js";
import LaserTherapy from "./components/vet-services/LaserTherapy/laserTherapy.js";
import Microchipping from "./components/vet-services/Microchipping/microchipping.js";
import Euthanasia from "./components/vet-services/Euthanasia/euthanasia.js";
//services

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* main component */}
        <Route path="/" element={<MainComponent />} />
        {/* main component */}

        {/* services components */}
        <Route
          path="/services/wellness"
          element={<Wellness wellnessData={services.wellness} />}
        />
        <Route
          path="/services/exotic"
          element={<Exotic exoticData={services.exotic} />}
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
        <Route
          path="/services/euthanasia"
          element={<Euthanasia euthanasiaData={services.euthanasia} />}
        />
        {/* services components */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
