import React, { useState } from "react";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import "./mobileMenu.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
const MobileMenu = ({ swapHamburgerState }) => {
  const [aboutUsToggle, setAboutUsToggle] = useState(false);
  const [serviceToggle, setServiceToggle] = useState(false);

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
          <a
            onClick={() => setAboutUsToggle(!aboutUsToggle)}
            className="about-us-nav-item"
          >
            <p>About</p>
            {aboutUsToggle ? (
              <KeyboardArrowDownIcon sx={{ fontSize: 30 }} />
            ) : (
              <KeyboardArrowRightIcon sx={{ fontSize: 24 }} />
            )}
          </a>
          {aboutUsToggle && (
            <ul className="dropdown-menu-about">
              <li>
                <a href="/about/team">Team</a>
              </li>
              <li>
                <a href="/about/careers">Careers</a>
              </li>
            </ul>
          )}
        </li>

        <li className="toggled-nav-item">
          <a
            onClick={() => setServiceToggle(!serviceToggle)}
            className="about-us-nav-item"
          >
            <p>Services</p>
            {serviceToggle ? (
              <KeyboardArrowDownIcon sx={{ fontSize: 30 }} />
            ) : (
              <KeyboardArrowRightIcon sx={{ fontSize: 24 }} />
            )}
          </a>
          {serviceToggle && (
            <ul className="dropdown-menu-about">
              <li>
                <a href="/services/Wellness">Wellness</a>
              </li>

              <li>
                <a href="/services/exotic">Exotic</a>
              </li>

              <li>
                <a href="/services/preventative">Preventative</a>
              </li>

              <li>
                <a href="/services/surgery">Surgery</a>
              </li>

              <li>
                <a href="/services/dental-care">Dental Care</a>
              </li>

              <li>
                <a href="/services/laser-therapy">Laser Therapy</a>
              </li>

              <li>
                <a href="/services/microchipping">Microchipping</a>
              </li>

              <li>
                <a href="/services/Hospice">Hospice</a>
              </li>
            </ul>
          )}
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
