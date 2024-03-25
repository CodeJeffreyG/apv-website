import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../assests/logo.jpg";
import MobileMenu from "../MobileMenu";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CallIcon from "@mui/icons-material/Call";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [hamburgerToggle, setHamburgerToggle] = useState(false);

  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const swapHamburgerState = () => setHamburgerToggle(!hamburgerToggle);

  return (
    <nav className="navvbar">
      <Link to="/">
        <img src={logo} className="navvbar-logo" alt="Company Logo" />
      </Link>

      {!isMobile && (
        <div className="navvbar-center">
          <div className="navvbar-phone">
            <a href="tel:+2153473997" className="phone-link">
              <CallIcon sx={{ fontSize: 24 }} className="phone-icon" /> (484)
              461-7520
            </a>
          </div>
          <ul className="navvbar-navv">
            <li
              className={`navv-item ${pathname === "/" ? "active-link" : ""}`}
            >
              <Link to="/" className="navv-item-link">
                Home
              </Link>
            </li>

            <li
              className={`navv-item ${
                pathname === "/contact" ? "active-link" : ""
              }`}
            >
              <Link to="/contact">Contact</Link>
            </li>

            <li
              className={`navv-item dropdown ${
                pathname.includes("about") ? "active-link" : ""
              }`}
            >
              <Link to="#">About</Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/about/team">Team</Link>
                </li>
                <li>
                  <Link to="/about/careers">Careers</Link>
                </li>
              </ul>
            </li>

            <li
              className={`navv-item dropdown ${
                pathname.includes("services") ? "active-link" : ""
              }`}
            >
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

            <li className="navv-item emergency">
              <Link to="/emergency">EMERGENCY</Link>
            </li>
          </ul>
        </div>
      )}

      <a
        onClick={isMobile ? swapHamburgerState : undefined}
        className={isMobile ? "menu-icon" : "facebook-icon"}
        href={!isMobile ? "https://www.facebook.com/dr.bowers/" : undefined}
      >
        {isMobile ? (
          <MenuSharpIcon  />
        ) : (
          <FacebookSharpIcon sx={{ fontSize: 60 }} color="primary" />
        )}
      </a>

      {hamburgerToggle && (
        <MobileMenu swapHamburgerState={swapHamburgerState} />
      )}
    </nav>
  );
}

export default Navbar;

//all kinds vet
