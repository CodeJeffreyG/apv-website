import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../media/logo.jpg";
import MobileHamburgerToggle from "./mobilehamburgertoggle/mobilehamburgertoggle";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";

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
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about">About</a>
        </li>
        <li className="nav-item">
          <a href="/contact">Contact</a>
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
