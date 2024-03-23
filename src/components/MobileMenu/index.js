import React from "react";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import "./mobileMenu.css";

const MobileMenu = ({ swapHamburgerState }) => {
  return (
    <main className="container">
      <div onClick={swapHamburgerState}>
        <span class="toggled-hamburger-icon ">X</span>
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

export default MobileMenu;
