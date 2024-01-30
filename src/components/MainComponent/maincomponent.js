import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
import turtle from "../media/carousel-images/anotherturtle.jpg";
import cat from "../media/carousel-images/cat.jpg";

const MainComponent = () => {
  return (
    <div className="main-hero">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={turtle} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={cat} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Item components as needed */}
      </Carousel>
    </div>
  );
};
export default MainComponent;
