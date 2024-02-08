import React from "react";
import imageOne from "../media/carousel-images/staffDogs/hazel-zeke-danielle.jpg";
import imageTwo from "../media/carousel-images/staff/Kim-With-Dog.jpg";
import "./wellness.css";

const wellness = () => {
  return (
    <div className="wellness-visit-container">
      {/* Section One */}
      <div className="section section-one">
        <div className="text-container">
          <h1>Pet Exams at All Pets Vet</h1>
          <p>
            At All Pets Veterinary Hospital, we strive for customized service in
            all aspects of our care...
          </p>
        </div>
        <div className="image-container">
          {imageOne && <img src={imageOne} alt="Pet" className="pet-image" />}
        </div>
      </div>

      {/* Section Two */}
      <div className="section section-two">
        <div className="image-container">
          {imageTwo && <img src={imageTwo} alt="Pet" className="pet-image" />}
        </div>
        <div className="text-container">
          <h2>Preventing Issues with Pet Exams and Wellness Care</h2>
          <p>
            Sometimes a pet wellness exam may alert us to underlying medical
            conditions in your companion. The earlier we catch things like
            cancerous tumors and dental disease, the easier it is to treat your
            pet. You can potentially prevent larger medical issues when you
            bring your companion in for annual exams and we’ll run the proper
            diagnostics to accurately diagnose any illness.
            <br />
            <br />
            Pet wellness care is also the time to address preventative care for
            things like fleas, ticks and heartworms. Spaying and neutering may
            also prevent medical and behavioral conditions. During a wellness
            exam, we’ll advise you on the best time to have this surgery for
            your breed and type of pet. We’ll discuss a vaccination schedule for
            new puppies and kittens to protect them from dangerous diseases and
            update boosters for adult pets. If your pet has entered into their
            senior years, we recommend semi-annual wellness exams to give your
            companion the best care possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default wellness;
