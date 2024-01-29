import React from "react";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import "./mobilemaburgertoggle.css";

const MobileHamburgerToggle = ({ swapHamburgerState }) => {
  return (
    <main className="container">
      <div onClick={swapHamburgerState}>
        <MenuSharpIcon
          className="toggled-hamburger-icon "
          sx={{ fontSize: 40 }}
        />
      </div>
      <ul className="toggled-navbar-nav">
        <li className="toggled-nav-item">
          <a href="/">Home</a>
        </li>
        <li className="toggled-nav-item">
          <a href="/about">About</a>
        </li>
        <li className="toggled-nav-item">
          <a href="/contact">Contact</a>
        </li>
        <li className="toggled-nav-item">
          <a href="/emergency" className="emergency">
            EMERGENCY
          </a>
        </li>
      </ul>
    </main>
  );
};

{
  /* <li className="toggled-nav-item">
          <a href="/">Home</a>
        </li>
        <li className="toggled-nav-item">
          <a href="/about">About</a>
        </li>
        <li className="toggled-nav-item">
          <a href="/contact">Contact</a>
        </li>
        <li className="toggled-nav-item">
          <a href="/emergency" className="emergency">
            EMERGENCY
          </a>
        </li> */
}

export default MobileHamburgerToggle;
