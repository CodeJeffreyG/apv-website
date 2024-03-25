import "./ContactUs.css";
import googleMap from "../../assests/carousel-images/staff/Kim-With-Dog.jpg";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">Find Us</div>

      <main className="contact-main">
        <div className="contact-info">
          <h1>Find Mealtime</h1>
          <p className="address">
            <strong>Address:</strong> 9219 Alberene Dr, Houston, TX 77074
          </p>
          <p className="phone">
            <strong>Phone:</strong> (832) - 757 - 7760
          </p>
          <div className="sales-hours">
            <h2>Sales</h2>
            <p>Monday-Friday: 9:00AM - 7 :00PM</p>
            <p>Saturday: 9:00AM - 6:00PM</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="service-hours">
            <h2>Service</h2>
            <p>Monday-Friday: 9:00AM - 6:00PM</p>
            <p>Saturday: 9:00AM - 1:00PM</p>
            <p>Sunday: Closed</p>
          </div>
          <a
            href="https://maps.app.goo.gl/eVZwUgQmRnFwWK1r9"
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
