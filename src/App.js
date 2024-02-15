import { BrowserRouter, Routes, Route } from "react-router-dom";
import { services } from "./components/vet-services/allServicesData.js";
import Navbar from "./components/navbar/navbar.js";
import MainComponent from "./components/MainComponent/maincomponent.js";
import Wellness from "./components/Wellness/wellness.js";
import vaccines from "./components/Vaccines/vaccines.js";
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
          element={<Wellness textInformation={services.vaccines} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
