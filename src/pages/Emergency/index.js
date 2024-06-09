import "./emergency.css";
import React from "react";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

// Import data 
import EMERGENCY_HOSPITALS from "../../data/emergencyHospitals";
import EXOTIC_PATIENT_HOSPITALS from "../../data/exoticPatientHospitals";

import MapIcon from "../../assests/google-maps-bigger.png"

const Emergency = () => {
  return (
    <div className="emergency-container">
      <div className="emergency-header-container container">
        <div className="emergency-header">
          <LocalHospitalIcon
            sx={{ fontSize: 34, color: "red", verticalAlign: "middle" }}
          />
          EMERGENCY
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

      <br /><br />

      <div className="emergency-lists">
        <div className="emergency-column col-lg-6 col-md-6 col-12">
          <div className="emergency-type">Emergency Hospitals:</div>
          {EMERGENCY_HOSPITALS.map((item) => (
            <div className="map-wrapper col-md-12 col-lg-12 col-12">

              <div className="map-content">
                <a
                  href={item.url}
                  target="_blank"
                  className="emergency-link"
                >
                  {item.name}
                  <span className="emergency-link-info">
                    {item.location}
                  </span>
                  <span className="phone-number">(555) 555 5555</span>
                </a>

                <a href={item.directions} className="get-direction-btn">
                  <img src={MapIcon} className="mapIcon" alt="" />

                </a>

              </div>
            </div>
          ))}
        </div>
        <div className="emergency-column col-lg-6 col-md-6 col-12">
          <div className="emergency-type">For Our Exotic Patients:</div>
          {EXOTIC_PATIENT_HOSPITALS.map((item) => (
            <div className="map-wrapper col-md-12 col-lg-12 col-12">

              <div className="map-content">
                <a
                  href={item.url}
                  target="_blank"
                  className="emergency-link"
                >
                  {item.name}
                  <span className="emergency-link-info">
                    {item.location}
                  </span>
                  <span className="phone-number">(555) 555 5555</span>
                </a>

                <a href={item.directions} className="get-direction-btn">

                  <img src={MapIcon} className="mapIcon" alt="" />

                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Emergency;
