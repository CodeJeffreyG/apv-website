import { BrowserRouter, Routes, Route } from "react-router-dom";
//all services data
import { services } from "./components/vet-services/allServicesData.js";

//nav
import Navbar from "./components/navbar/navbar.js";
//nav

//main
import MainComponent from "./components/MainComponent/maincomponent.js";
//main

//services
import Wellness from "./components/vet-services/Wellness/Wellness.js";
import Exotic from "./components/vet-services/Exotic/Exotic.js";
import Preventative from "./components/vet-services/Preventative/Preventative.js";
import Surgery from "./components/vet-services/Surgery/Surgery.js";
import DentalCare from "./components/vet-services/Dental/Dentalcare.js";
import LaserTherapy from "./components/vet-services/LaserTherapy/LaserTherapy";
import Microchipping from "./components/vet-services/Microchipping/Microchipping.js";
import Hospice from "./components/vet-services/Hospice/Hospice.js";
//services //

function App() {
  // all data for each component
  const {
    wellness,
    exotic,
    preventative,
    surgery,
    dentalCare,
    laserTherapy,
    microchipping,
    hospice,
  } = services;

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
          element={<Wellness wellnessData={wellness} />}
        />
        <Route
          path="/services/exotic"
          element={<Exotic exoticData={exotic} />}
        />
        <Route
          path="/services/preventative"
          element={<Preventative preventativeData={preventative} />}
        />
        <Route
          path="/services/surgery"
          element={<Surgery surgeryData={surgery} />}
        />
        <Route
          path="/services/dental-care"
          element={<DentalCare dentalCareData={dentalCare} />}
        />
        <Route
          path="/services/laser-therapy"
          element={<LaserTherapy laserTherapyData={laserTherapy} />}
        />
        <Route
          path="/services/microchipping"
          element={<Microchipping microchippingData={microchipping} />}
        />
        <Route
          path="/services/hospice"
          element={<Hospice hospiceData={hospice} />}
        />
        {/* services components */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
