import React from 'react'
import footballImg from '../assets/images/webp/hero-football.webp'

const Hero = () => {
    return (
        <>
            <h1 className="fs-lg ff-fontspring text-white lh-lg-84 z-2 position-relative lh-md-60 mb-0 text-center text-lg-start pt-5 mt-4 mt-sm-0 pt-lg-0">Talk to The <span className='d-block clr-yellow'>Team</span></h1>
            <div className="d-flex justify-content-center justify-content-lg-start position-relative z-2">
                <button className="mt-4 mt-sm-3 mt-lg-4 heroBtn fw-semibold text-uppercase text-black fs-xs bg-yellow navLink-button ffBarlow" type="button">
                    set an appointment
                </button>
            </div>
            <div className="d-none d-lg-block">
                <img src={footballImg} alt="football img team" loading='lazy' className='position-absolute bottom-0 herofootballimg' />
            </div>
            <img src={footballImg} alt="football img team" height={530} loading='lazy' className='w-100 pt-5 mt-3 mt-sm-0 d-lg-none object-fit-cover' />

        </>
    )
}

export default Hero