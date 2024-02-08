import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.js";
import MainComponent from "./components/MainComponent/maincomponent.js";
import Wellness from "./components/Wellness/wellness.js";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/services/wellness" element={<Wellness />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
