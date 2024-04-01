import { Typography } from "@mui/material";
import "./Product.css";
import LocalHospitalIcon from "@mui/icons-material/CalendarMonthOutlined";

import { useNavigate } from "react-router-dom";

function Products({ heading, data }) {
  const navigate = useNavigate();

  return (
    <div className="product-container">
      <h1 className="product-heading">{heading}</h1>
      <div className="product-wrapper">
        {data.map((item, index) => {
          return (
            <div className="product-card" key={index}>
              <LocalHospitalIcon
                sx={{ fontSize: 34, color: "#bd092d", verticalAlign: "middle" }}
              />
              <Typography variant="h6" component="h1" className="product-card-h6" >
                {item.day}
              </Typography>
              <Typography>{item.hours}</Typography>
              {item.note && (
                <Typography className="note">{item.note}</Typography>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
