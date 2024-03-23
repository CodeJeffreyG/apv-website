import "./maincomponent.css";
import React from "react";
import CenteredOverlay from "./centeredOverlay/centeredOverlay";
import { hoursData } from "../../data/hours";
import { combinedPhotos } from "./arrayOfPhotos"; // Ensure correct path
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ContactUs from "../../components/ContactUs/ContactUs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import Products from "../../components/Products/Products";

const MainComponent = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="contentSide">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4500,
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
            <CenteredOverlay />
          </Swiper>
        </div>

        <div className="working-hours">
          <Products heading={"Hospital Hours"} data={hoursData} />
        </div>
        <ContactUs />
      </div>
    </>
  );
};

export default MainComponent;
