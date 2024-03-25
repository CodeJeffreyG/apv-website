import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrap">
        <div className="social-media">
          <div className="social-media-wrap">
            <Link className="logo" to="/">
              Mealtime
            </Link>
            <div className="social-icons">
              <a
                href="/"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <FaFacebook />
              </a>
              <a
                href="/"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <FaInstagram />
              </a>
              <a
                href="/"
                target="_blank"
                aria-label="YouTube"
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <FaYoutube />
              </a>
              <a
                href="/"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <FaTwitter />
              </a>
              <a
                href="/"
                target="_blank"
                aria-label="Linkedin"
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
