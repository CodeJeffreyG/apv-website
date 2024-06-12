import "./ContactUs.css";
import googleMap from "../../assests/googlemaps.png";
import GoogleMap from "../../components/GoogleMaps/index";
const ContactUs = () => {
  return (
    <div className="container">
      <br/><br/><br/><br/><br/>
      <div className="contact-header">All Pets Veterinary Hospital</div>

      <main className="row ">
        <div className="col-lg-6 col-md-12 col-12 contact-info">
          <p className="address">
            <strong></strong> 4017 Garret Rd Drexel Hill, PA 19026
          </p>
          <p className="phone">
            <strong></strong> (484) - 461 - 7520
          </p>
          <p className="phone">
            <strong></strong> drbowers@allpetsvet.net
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
        <div className="col-lg-6 col-md-12 col-12 contact-map">
          {/* <GoogleMap /> */}
          <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.932367201814!2d-75.30273592367988!3d39.94290247151972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c1838b294a3f%3A0xb6d540d35c2a9348!2sAll%20Pets%20Veterinary%20Hospital!5e0!3m2!1sen!2s!4v1718198394321!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
