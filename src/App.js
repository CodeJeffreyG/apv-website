// Library Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Data Imports
import { services } from "./data/allServicesData";
import Navbar from "./components/NavBar";

// Component Imports
import MainComponent from "./pages/MainComponent";
import Wellness from "./pages/VetServices/Wellness";
import Exotic from "./pages/VetServices/Exotic";
import Preventative from "./pages/VetServices/Preventative";
import Surgery from "./pages/VetServices/Surgery";
import DentalCare from "./pages/VetServices/Dental";
import LaserTherapy from "./pages/VetServices/LaserTherapy";
import MicroChipping from "./pages/VetServices/MicroChipping";
import Hospice from "./pages/VetServices/Hospice";
import Emergency from "./pages/Emergency";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import Teams from "./pages/About/Teams";

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
          element={<MicroChipping microchippingData={microchipping} />}
        />
        <Route
          path="/services/hospice"
          element={<Hospice hospiceData={hospice} />}
        />
        {/* services components */}

        <Route path="/emergency" element={<Emergency />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/about/careers" element={<Careers />} />
        <Route path="/about/team" element={<Teams />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
