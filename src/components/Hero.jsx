import React from 'react'
import footballImg from '../assets/images/webp/hero-football.webp'

const Hero = () => {
    return (
        <>
            <h1 className="px-12 fs-6xl ff-fontspring text-white lh-lg-84 z-2 position-relative lh-md-60 mb-0 pt-5 mt-4 py-md-0 my-md-0">Talk to The <span className='d-block clr-yellow'>Team</span></h1>
            <div className="position-relative pt-2 z-2 px-12 pb-30 pb-sm-0">
                <button className="mt-4 mt-sm-3 mt-lg-4 heroBtn fw-normal text-uppercase text-black fs-sm bg-yellow navLinkButton ffBarlow" type="button">
                    Book Appointment
                </button>
            </div>
            {/* <div className="d-none d-lg-block">
                <img src={footballImg} alt="football img team" loading='lazy' className='position-absolute bottom-0 herofootballimg' />
            </div>
            <img src={footballImg} alt="football img team" height={530} loading='lazy' className='w-100 pt-5 mt-3 mt-sm-0 d-lg-none object-fit-cover' /> */}
            <div className="mt-5 pt-4 mt-lg-0 d-flex justify-content-end ">
                <img className="end-0 bottom-0 common_hero_position z-0 transfrom-60 talk-img" src={footballImg} alt="hero-right-charactors"></img>
            </div>
        </>
    )
}

export default Hero