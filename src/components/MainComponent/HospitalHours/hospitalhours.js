import React from "react";
import "./hospitalhours.css";
import PetsIcon from "@mui/icons-material/Pets";
import { Typography, Box } from "@mui/material";

const HospitalHours = () => {
  const daysHours = [
    { day: "Monday", hours: "9AM - 4PM" },
    { day: "Tuesday", hours: "9AM - 4PM" },
    { day: "Wednesday", hours: "9AM - 6PM" },
    { day: "Thursday", hours: "2PM - 8PM" },
    { day: "Friday", hours: "9AM - 6PM" },
    { day: "Saturday", hours: "9AM - 3PM", note: "Two Saturdays per month" },
  ];

  return (
    <Box className="hours-container">
      <Typography
        variant="h4"
        component="div"
        className="hours-title"
        sx={{ mb: 3 }}
      >
        <PetsIcon sx={{ fontSize: 30, verticalAlign: "middle" }} />
        Hospital Hours
        <PetsIcon sx={{ fontSize: 30, verticalAlign: "middle" }} />
      </Typography>
      <Box className="cards-container">
        {daysHours.map((item, index) => (
          <Box key={index} className="hours-card">
            <Typography variant="h6" component="div">
              {item.day}
            </Typography>
            <Typography>{item.hours}</Typography>
            {item.note && <Typography className="note">{item.note}</Typography>}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HospitalHours;
