import randomPhoto1 from "../media/carousel-images/staff/LouWCat.jpg";
import randomPhoto2 from "../media/carousel-images/staffExotic/phillipEmilysHamster.jpg";
import randomPhoto3 from "../media/carousel-images/staffDogs/dozer-belles.jpg";
import randomPhoto4 from "../media/carousel-images/notStaffDogs/doggie.jpg";
import randomPhoto5 from "../media/carousel-images/notStaffDogs/doggie2.jpg";
import randomPhoto6 from "../media/carousel-images/staffExotic/radnor-treenas-bd.jpg";

import "./maincomponent.css";
import React from "react";
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
  const randomImageArray = [
    randomPhoto1,
    randomPhoto2,
    randomPhoto3,
    randomPhoto4,
    randomPhoto5,
    randomPhoto6,
  ];

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
        {randomImageArray.map((currentImage, index) => {
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
    </div>
  );
};

export default MainComponent;
