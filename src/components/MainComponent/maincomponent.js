import "./maincomponent.css";
import React from "react";
import HospitalHours from "./HospitalHours/hospitalhours"; // Ensure correct path
import { combinedPhotos } from "./arrayOfPhotos"; // Ensure correct path
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const MainComponent = () => {
  return (
    <div className="mainContainer">
      <HospitalHours />
      <div className="contentSide">
        <div className="arrivalInstructions">
          <h2>To Minimize Stress for You & Your Pet</h2>
          <h2>Please Call 484-461-7520 upon arrival</h2>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={500} // Adds a 500ms transition between slides
            modules={[Autoplay]} // Add other modules like Navigation, Pagination if you use them
            className="swiperContainer"
          >
            {combinedPhotos.map((currentImage, index) => (
              <SwiperSlide key={index} className="slide">
                <img src={currentImage} alt={`Slide ${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
