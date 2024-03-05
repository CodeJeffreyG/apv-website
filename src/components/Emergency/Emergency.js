import "./emergency.css";
import React from "react";

const Emergency = () => {
  return (
    <div className="emergency-container">
      <div className="emergency-header-container">
        <div className="emergency-header">WE WILL HELP YOUR PET</div>
        <div className="emergency-instructions">
          If the emergency is during our office hours, call and we will help
          your pet. If this is off our hours or an overnight emergency, we
          recommend the following facilities:
        </div>
      </div>

      <div className="emergency-lists">
        <div className="emergency-column">
          <div className="emergency-type">Emergency Hospitals:</div>
          <a href="#" className="emergency-link">
            Keystone Veterinary Emergency
            <span className="emergency-link-info">
              (Havertown, PA 19083 - 24hr)
            </span>
          </a>
          <a href="#" className="emergency-link">
            Blue Pearl Pet Hospital
            <span className="emergency-link-info">
              (Philadelphia, PA 19147 - 24hr)
            </span>
          </a>
          <a href="#" className="emergency-link">
            Metropolitan Veterinary Associates
            <span className="emergency-link-info">
              (Norristown, PA 19403 - 24hr)
            </span>
          </a>
          <a href="#" className="emergency-link">
            VRC - Veterinary Referral Center
            <span className="emergency-link-info">
              (Malvern, PA 19355 - 24hr)
            </span>
          </a>
        </div>
        <div className="emergency-column">
          <div className="emergency-type">For Our Exotic Patients:</div>
          <a href="#" className="emergency-link">
            VEG - Veterinary Emergency Group {/*philadelphia PA  24hr*/}
            <span className="emergency-link-info">
              (Philadelphia, PA - 24hr)
            </span>
          </a>
          <a href="#" className="emergency-link">
            Mount Laurel Animal Hospital {/* Mount Larurel Township NJ 24 hr*/}
            <span className="emergency-link-info">
              (Mount Larurel Township, NJ - 24hr)
            </span>
          </a>
          <a href="#" className="emergency-link">
            Radnor Veterinary Hospital {/* Wayne PA */}
            <span className="emergency-link-info">(Wayne, PA)</span>
          </a>
          <a href="#" className="emergency-link">
            Avian & Exotic Medical Center {/* Aston, PA */}
            <span className="emergency-link-info">(Aston, PA)</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
