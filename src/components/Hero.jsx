import React from 'react'
import footballImg from '../assets/images/webp/hero-football.webp'

const Hero = () => {
    return (
        <>
            <h1 className="fs-lg ff-fontspring text-white lh-lg-84 lh-md-60 mb-0 text-center text-lg-start pt-5 mt-4 mt-sm-0">Talk to The <span className='d-block clr-yellow'>Team</span></h1>
            <div className="d-flex justify-content-center justify-content-lg-start">
                <button className="px-4 mt-3 py-2 fw-semibold text-uppercase rounded-1 text-black fs-xs bg-yellow navLink-button ffBarlow" type="button">
                    set an appointment
                </button>
            </div>
            <img src={footballImg} alt="football img team" className='end-0 bottom-0 position-absolute herofootballimg' />
        </>
    )
}

export default Hero