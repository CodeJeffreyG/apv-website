import randomPhoto1 from "../media/carousel-images/staff/LouWCat.jpg";
import randomPhoto2 from "../media/carousel-images/staffExotic/phillipEmilysHamster.jpg";
import randomPhoto3 from "../media/carousel-images/staffDogs/dozer-belles.jpg";
import randomPhoto4 from "../media/carousel-images/notStaffDogs/doggie.jpg";
import randomPhoto5 from "../media/carousel-images/notStaffDogs/doggie2.jpg";
import randomPhoto6 from "../media/carousel-images/staffExotic/radnor-treenas-bd.jpg";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

//swiper stuff
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const MainComponent = () => {
  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay]}
      autoplay={true}
      duration={2500}
      style={{ height: `calc(100vh - ${84}px)`, padding: "5px" }} // Adjust Swiper height
    >
      <SwiperSlide
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={randomPhoto1}
          alt=""
          style={{ height: "100%", width: "auto", padding: "1px" }}
        />
      </SwiperSlide>

      <SwiperSlide
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={randomPhoto2}
          alt=""
          style={{ height: "100%", width: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={randomPhoto3}
          alt=""
          style={{ height: "100%", width: "auto" }}
        />
      </SwiperSlide>

      <SwiperSlide
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={randomPhoto4}
          alt=""
          style={{ height: "100%", width: "auto" }}
        />
      </SwiperSlide>

      <SwiperSlide
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={randomPhoto5}
          alt=""
          style={{ height: "100%", width: "auto" }}
        />
      </SwiperSlide>

      <SwiperSlide
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={randomPhoto6}
          alt=""
          style={{ height: "100%", width: "auto" }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MainComponent;
