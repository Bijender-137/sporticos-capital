// src/Slider.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import the styles
import { sliderData } from './common/Helper';
import { NextIcon, PrevIcon } from './common/Icons';
import { Link } from 'react-router-dom';

const Slider = () => {
    const handlePrev = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };

    let swiper; // Reference to the Swiper instance

    return (
        <>
            <div className='py-5 my-lg-5'>
                <Container>
                    <h5 className='text-center fs-xxl ff-fontspring fw-semibold text-black mb-0'>Driving Value with Our Integrated Approach</h5>
                    <p className='text-center fs-base fw-normal text-black opacity-07 ffBarlow mb-0 pt-1'>Through diversified verticals focused on the football industry, we empower investors, <span className="d-md-block">clubs, and players alike to thrive. <span className='fw-bold'>Here's how:</span></span></p>
                    <div className="position-relative">
                        <Swiper
                            spaceBetween={24}
                            slidesPerView={3}
                            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
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
                            {sliderData.map((data, id) => {
                                return (
                                    <SwiperSlide key={id} className='pt-4 pb-5 py-md-5'>
                                        <div className="dreamPlayer-shadow p-3 h-100 transition_300 mx-auto">
                                            <img src={data.img} alt="sliderImg" className='w-100 img-br-7 transition_300' />
                                            <p className="pt-3 mb-0 ff-fontspring fs-base fw-semibold">{data.sliderHeading}</p>
                                            <p className="pt-2 mb-0 ffBarlow fs-base fw-normal text-black opacity-07">{data.sliderpara}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <div className="swiper-button-prev" onClick={handlePrev}>
                            <PrevIcon />
                        </div>
                        <div className="swiper-button-next" onClick={handleNext}>
                            <NextIcon />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center pt_lg_0">
                        <Link to="/about-us" className="heroBtn fw-normal text-uppercase text-black fs-sm bg-yellow navLink-button ffBarlow">
                            reach out
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Slider;