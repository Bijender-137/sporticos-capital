import React from 'react'
import scouting from '../assets/images/webp/ScouactingImg.webp'

const HeroScouting = () => {
    return (
        <>
            <h2 className='fs-5xl ff-fontspring text-white z-2 position-relative mb-0 text-center text-lg-start pt-5 mt-4 mt-sm-0 pt-lg-0'>Proudly <span className="d-lg-block"><span className="clr-yellow">Prioritizing</span> Player</span> <span className="d-lg-block">Performance</span></h2>
            <p className="mb-0 ffBarlow text-white fs-lg pt-2 text-center text-lg-start">We believe in the power of well-rounded players both <span className="d-lg-block">on and off the field to support thriving football clubs.</span></p>
            <div className="d-flex justify-content-center justify-content-lg-start position-relative pt-2 z-2">
                <button className="mt-4 mt-sm-3 mt-lg-4 heroBtn fw-normal text-uppercase text-black fs-sm bg-yellow navLinkButton ffBarlow" type="button">
                    Book Appointment
                </button>
            </div>
            <div className="d-none d-lg-block">
                <img src={scouting} alt="football img team" loading='lazy' className='position-absolute bottom-0 herofootballimg' />
            </div>
            <img src={scouting} alt="football img team" height={530} loading='lazy' className='w-100 pt-5 mt-3 mt-sm-0 d-lg-none object-fit-cover heroscoutingImg' />
        </>
    )
}

export default HeroScouting