import "./emergency.css";
import React from "react";

const Emergency = () => {
  return (
    <div className="emergency-container">
      <div className="emergency-header">Emergency Hospitals in our area:</div>
      <div className="emergency-instructions">
        If the emergency is during our office hours, call and we will help your
        pet. If this is an off-hours or overnight emergency, we recommend the
        following facilities:
      </div>
      <div className="emergency-lists">
        <div className="emergency-column">
          <div className="emergency-type">Only Cats & Dogs:</div>
          <a href="#" className="emergency-link">
            Keystone Veterinary Emergency
          </a>
          <a href="#" className="emergency-link">
            Blue Pearl Pet Hospital
          </a>
          <a href="#" className="emergency-link">
            Metropolitan Veterinary Associates
          </a>
        </div>
        <div className="emergency-column">
          <div className="emergency-type">Only Exotic:</div>
          <a href="#" className="emergency-link">
            VEG - Veterinary Emergency Group {/*philadelphia PA  24hr*/}
          </a>
          <a href="#" className="emergency-link">
            Mount Laurel Animal Hospital {/* Mount Larurel Township NJ 24 hr*/}
          </a>
          <a href="#" className="emergency-link">
            Radnor Veterinary Hospital {/* Wayne PA */ }
          </a>
          <a href="#" className="emergency-link">
            Radnor Veterinary Hospital {/* Wayne PA */ }
          </a>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
