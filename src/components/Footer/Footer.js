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
              All Pets Veterinary Hospital
            </Link>
            <p className="copyrights">All copyrights are reserved | @2024</p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
