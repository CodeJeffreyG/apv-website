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
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay]}
        autoplay={true}
        duration={50}
        effect="fade"
        className="main-swiper-container"
      >
        {combinedPhotos.map((currentImage, index) => {
          return (
            <SwiperSlide
              index={index}
              className="main-individual-slide-container"
            >
              <img
                src={currentImage}
                alt=""
                className="main-individual-slide-image"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <CenteredOverlay />
      <HospitalHours />
    </div>
  );
};

export default MainComponent;
