import Navbar from "./components/navbar/navbar.js";
import MainComponent from "./components/MainComponent/maincomponent.js";
import Hospitalhours from "./components/HospitalHours/hospitalhours.js";
import Wellness from "./components/Wellness/wellness.js";
function App() {
  return (
    <div className="page-container">
      <Navbar />
      <Wellness />
      {/* <MainComponent /> */}
      {/* <Hospitalhours /> */}
    </div>
  );
}

export default App;
