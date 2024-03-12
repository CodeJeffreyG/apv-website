import { combinedPhotos } from "./arrayOfPhotos";
import "./maincomponent.css";
import React from "react";
import HospitalHours from "./HospitalHours/hospitalhours";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import CenteredOverlay from "./centeredOverlay/centeredOverlay";

//swiper stuff
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const MainComponent = () => {
  return (
    <div className="main-container">
      <div className="left-side">
        <HospitalHours />
      </div>
      <div className="right-side">
        <div className="hours-rightPanel">
          {/* Content of hours-rightPanel from HospitalHours component */}
          {/* This will be displayed above the Swiper component */}
          <h2>Our priority is to minimize stress.</h2>
          <p className="please-call-important">
            Please Call: <a href="tel:+2153473997">(484)-461-7520</a>
            <br /> when you arrive so we can prepare for your visit.
          </p>
        </div>
        <Swiper
          spaceBetween={0}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          effect="fade"
          className="main-swiper-container"
        >
          {combinedPhotos.map((currentImage, index) => (
            <SwiperSlide
              key={index}
              className="main-individual-slide-container"
            >
              <img
                src={currentImage}
                alt={`Slide ${index}`}
                className="main-individual-slide-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MainComponent;
