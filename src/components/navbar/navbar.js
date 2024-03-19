import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../media/logo.jpg";
import MobileHamburgerToggle from "./mobilehamburgertoggle/mobilehamburgertoggle";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [hamburgerToggle, setHamburgerToggle] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const swapHamburgerState = () => setHamburgerToggle(!hamburgerToggle);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} className="navbar-logo" alt="Company Logo" />
      </Link>

      <div className="navbar-phone">
        <a href="tel:+2153473997" className="phone-link">
          <CallIcon sx={{ fontSize: 24 }} className="phone-icon" /> (484)
          461-7520
        </a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>

        <li className="nav-item dropdown">
          <Link to="/about">About</Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/about/team">Team</Link>
            </li>
            <li>
              <Link to="/about/careers">Careers</Link>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link to="/services/Wellness">Services</Link>{" "}
          {/* Updated href to "#" for dropdown trigger */}
          <ul className="dropdown-menu">
            <li>
              <Link to="/services/Wellness">Wellness</Link>
            </li>

            <li>
              <Link to="/services/exotic">Exotic</Link>
            </li>

            <li>
              <Link to="/services/preventative">Preventative</Link>
            </li>

            <li>
              <Link to="/services/surgery">Surgery</Link>
            </li>

            <li>
              <Link to="/services/dental-care">Dental Care</Link>
            </li>

            <li>
              <Link to="/services/laser-therapy">Laser Therapy</Link>
            </li>

            <li>
              <Link to="/services/microchipping">Microchipping</Link>
            </li>

            <li>
              <Link to="/services/Hospice">Hospice</Link>
            </li>
          </ul>
        </li>

        <li className="nav-item emergency">
          <Link to="/emergency">EMERGENCY</Link>
        </li>
      </ul>

      <a
        onClick={isMobile ? swapHamburgerState : undefined}
        className={isMobile ? "menu-icon" : "facebook-icon"}
        href={!isMobile ? "https://www.facebook.com/dr.bowers/" : undefined}
      >
        {isMobile ? (
          <MenuSharpIcon sx={{ fontSize: 60 }} />
        ) : (
          <FacebookSharpIcon sx={{ fontSize: 60 }} color="primary" />
        )}
      </a>

      {hamburgerToggle && (
        <MobileHamburgerToggle swapHamburgerState={swapHamburgerState} />
      )}
    </nav>
  );
}

export default Navbar;

//all kinds vet
