import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../media/logo.jpg";
import MobileHamburgerToggle from "./mobilehamburgertoggle/mobilehamburgertoggle";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CallIcon from "@mui/icons-material/Call";

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
      <img src={logo} className="navbar-logo" alt="Company Logo" />

      <div className="navbar-phone">
        <a href="tel:+1234567890" className="phone-link">
          <CallIcon sx={{ fontSize: 24 }} className="phone-icon" /> (484)
          461-7520
        </a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>

        <li className="nav-item">
          <a href="/contact">Contact</a>
        </li>

        <li className="nav-item dropdown">
          <a href="/about">About</a>
          <ul className="dropdown-menu">
            <li>
              <a href="/about/history">History</a>
            </li>
            <li>
              <a href="/about/team">Team</a>
            </li>
            <li>
              <a href="/about/mission">Mission</a>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a href="#">Resources</a>{" "}
          {/* Updated href to "#" for dropdown trigger */}
          <ul className="dropdown-menu">
            <li>
              <a href="/resources/guides">Guides</a>
            </li>
            <li>
              <a href="/resources/tutorials">Tutorials</a>
            </li>
            <li>
              <a href="/resources/tools">Tools</a>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a href="#">Services</a>{" "}
          {/* Updated href to "#" for dropdown trigger */}
          <ul className="dropdown-menu">
            <li>
              <a href="/services/consulting">Consulting</a>
            </li>
            <li>
              <a href="/services/implementation">Implementation</a>
            </li>
            <li>
              <a href="/services/support">Support</a>
            </li>
          </ul>
        </li>

        <li className="nav-item emergency">
          <a href="/emergency">EMERGENCY</a>
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
