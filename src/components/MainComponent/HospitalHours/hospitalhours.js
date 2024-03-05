import React from "react";
import "./hospitalhours.css";

const hospitalhours = () => {
  return (
    <div className="hours-container">
      <div className="hours-leftPanel">
        <h2>Hospital Hours:</h2>
        <p>Monday: 9:00AM - 4:00PM</p>
        <p>Tuesday: 9:00AM - 4:00PM</p>
        <p>Wednesday: 9:00AM - 6:00PM</p>
        <p>Thursday: 2:00PM - 8:00PM</p>
        <p>Friday: 9:00AM - 6:00PM</p>
        <p>Saturday: 9:00AM - 3:00PM (Every other Saturday)</p>
      </div>
      <div className="hours-rightPanel">
        <h2>Our priority is to minimize stress.</h2>

        <p className="please-call-important">
          Please Call: <a href="tel:+2153473997">(484)-461-7520</a>
          <br /> when you arrive so we can prepare for your visit.
        </p>
      </div>
    </div>
  );
};

export default hospitalhours;
