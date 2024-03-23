import "./emergency.css";
import React from "react";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
const Emergency = () => {
  return (
    <div className="emergency-container">
      <div className="emergency-header-container">
        <div className="emergency-header">
          <LocalHospitalIcon
            sx={{ fontSize: 34, color: "red", verticalAlign: "middle" }}
          />
          {"   "}EMERGENCY{"   "}
          <LocalHospitalIcon
            sx={{ fontSize: 34, color: "red", verticalAlign: "middle" }}
          />
        </div>
        <div className="emergency-instructions">
          For our clients, if your pet has an urgent issue during our office
          hours, please call us (484-461-7520) so that we can help you and your
          pet. <br /> <br />
          Otherwise, contact the following recommended hospitals:
        </div>
      </div>

      <div className="emergency-lists">
        <div className="emergency-column">
          <div className="emergency-type">Emergency Hospitals:</div>
          <a
            href="https://www.thrivepetcare.com/locations/pennsylvania/havertown/keystone-veterinary-emergency-referral?utm_source=google&utm_medium=gmbs"
            target="_blank"
            className="emergency-link"
          >
            Keystone Veterinary Emergency
            <span className="emergency-link-info">
              (Havertown, PA, 19083 - 24hr)
            </span>
          </a>

          <a
            href="https://bluepearlvet.com/hospital/malvern-pa/our-vets/"
            target="_blank"
            className="emergency-link"
          >
            Blue Pearl Pet Hospital
            <span className="emergency-link-info">
              (Philadelphia, PA, 19147 - 24hr)
            </span>
          </a>

          <a
            href="https://metro-vet.com/?gclid=CjwKCAjw17qvBhBrEiwA1rU9w7PXCCZz5uWOc7LWCtICs0EV-1LdC7KbTeuMuBuvCgniC1AS3jsF3hoCsRIQAvD_BwE"
            target="_blank"
            className="emergency-link"
          >
            Metropolitan Veterinary Associates
            <span className="emergency-link-info">
              (Norristown, PA, 19403 - 24hr)
            </span>
          </a>

          <a
            href="https://www.vrcmalvern.com/"
            target="_blank"
            className="emergency-link"
          >
            VRC - Veterinary Referral Center
            <span className="emergency-link-info">
              (Malvern, PA, 19355 - 24hr)
            </span>
          </a>
        </div>
        <div className="emergency-column">
          <div className="emergency-type">For Our Exotic Patients:</div>

          <a
            href="https://veterinaryemergencygroup.com/"
            target="_blank"
            className="emergency-link"
          >
            VEG - Veterinary Emergency Group {/*philadelphia PA  24hr*/}
            <span className="emergency-link-info">
              (Philadelphia, PA, 19107 - 24hr)
            </span>
          </a>

          <a
            href="https://mlahvet.com/"
            target="_blank"
            className="emergency-link"
          >
            Mount Laurel Animal Hospital {/* Mount Larurel Township NJ 24 hr*/}
            <span className="emergency-link-info">
              (Mount Larurel Township, NJ, 08054 - 24hr)
            </span>
          </a>

          <a
            href="https://radnorvet.com/"
            target="_blank"
            className="emergency-link"
          >
            Radnor Veterinary Hospital {/* Wayne PA */}
            <span className="emergency-link-info">(Wayne, PA, 19087)</span>
          </a>

          <a
            href="https://avianexoticvetpa.com/"
            target="_blank"
            className="emergency-link"
          >
            Avian & Exotic Medical Center {/* Aston, PA */}
            <span className="emergency-link-info">(Aston, PA, 19130)</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
