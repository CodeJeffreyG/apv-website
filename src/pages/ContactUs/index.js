import "./ContactUs.css";
import googleMap from "../../assests/googlemaps.png";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">Find Us</div>

      <main className="contact-main">
        <div className="contact-info">
          <h1>Find All Pets Veterinary Hospital</h1>
          <p className="address">
            <strong>Address:</strong> 4017 Garret Rd Drexel Hill, PA 19026
          </p>
          <p className="phone">
            <strong>Phone:</strong> (484) - 461 - 7520
          </p>

          <div className="service-hours">
            <h2>Office Hours</h2>
            <p>Monday: 9:00AM - 4PM</p>
            <p>Tuesday 9:00AM - 4PM</p>
            <p>Wednesday: 9:00AM - 6:00PM</p>
            <p>Thursday: 2:00PM - 8:00PM</p>
            <p>Friday: 9:00AM - 6:00PM</p>
            <p>Saturday-Friday: 9:00AM - 3:00PM (Every Other Saturday)</p>
            <p>Sunday: Closed</p>
          </div>
          <a
            href="https://maps.app.goo.gl/RJvXVjS3p3aQkgb79"
            target="_blank"
            className="directions-button"
            style={{ textDecoration: "none" }}
          >
            GET DIRECTIONS
          </a>
        </div>

        <div className="contact-map">
          <img src={googleMap} className="w-100" alt="" />
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
