// src/Slider.js
import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import the styles
import { sliderData } from "./common/Helper";
import { NextIcon, PrevIcon } from "./common/Icons";
import { Link } from "react-router-dom";

const DrivingSlider = () => {
  let prevButtonRef = null;
  let nextButtonRef = null;
  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
      prevButtonRef.style.backgroundColor = "#d9e76c";
      nextButtonRef.style.backgroundColor = "white";
      nextButtonRef.style.border = "1px solid black";
      prevButtonRef.style.border = "1px solid #d9e76c";
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
      prevButtonRef.style.backgroundColor = "white";
      nextButtonRef.style.backgroundColor = "#d9e76c";
      prevButtonRef.style.border = "1px solid black";
      nextButtonRef.style.border = "1px solid #d9e76c";
    }
  };

  let swiper; // Reference to the Swiper instance

  return (
    <>
      <div className="py-5">
        <Container className="my-lg-5">
          <h5 className="text-center fs-xxl ff-fontspring fw-semibold text-black mb-0">
            Driving Value with Our Integrated Approach
          </h5>
          <p className="text-center fs-base fw-normal text-black opacity-07 ff-barlow mb-0 pt-1">
            Through diversified verticals focused on the football industry, we
            empower investors,{" "}
            <span className="d-md-block">
              clubs, and players alike to thrive.{" "}
              <span className="fw-bold">Here's how:</span>
            </span>
          </p>
          <div className="position-relative">
            <Swiper
              spaceBetween={24}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="px-3"
              loop={true}
              onSwiper={(swiperInstance) => {
                // Save the Swiper instance to use it later
                swiper = swiperInstance;
              }}
              breakpoints={{
                200: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {sliderData.map((data, index) => {
                return (
                  <SwiperSlide key={index} className="pt-4 pb-5 py-sm-4 py-md-5 d-flex gap-2">
                    <div className="dreamplayer-shadow bg-white p-3 p-md-2 p-lg-3 h-100 transition_300 mx-auto">
                      <img
                        loading="lazy"
                        src={data.img}
                        alt="sliderImg"
                        className="w-100 h-100 img-br-7 transition_300"
                      />
                      <p className="pt-3 mb-0 ff-fontspring fs-base fw-semibold">
                        {data.sliderHeading}
                      </p>
                      <p className="pt-2 mb-0 ff-barlow fs-base fw-normal text-black opacity-07 pe-md-2 pe-xl-3 pe-xxl-3 me-xxl-3">
                        {data.sliderpara}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div
              ref={(ref) => { prevButtonRef = ref; }}
              className="swiper-button-prev transition_300 d-flex justify-content-center"
              onClick={handlePrev}
            >
              <div className="icons-slider">
                <PrevIcon />
              </div>
            </div>
            <div
              ref={(ref) => { nextButtonRef = ref; }}
              className="swiper-button-next transition_300 d-flex justify-content-center"
              onClick={handleNext}
            >
              <div className="icons-slider">
                <NextIcon />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center pt-4 pt-sm-0">
            <Link
              to="/about-us"
              className="fw-normal text-uppercase text-black fs-sm bg-yellow navLink-button transition_300 ff-barlow"
            >
              reach out
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DrivingSlider;
