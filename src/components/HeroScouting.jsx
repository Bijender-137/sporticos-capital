import React from 'react'
import scouting from '../assets/images/webp/ScouactingImg.webp'

const HeroScouting = () => {
    return (
        <>
            <h2 className="px-12 fs-5xl ff-fontspring text-white z-2 position-relative mb-0 pt-5 py-md-0 my-md-0">Proudly <span className="d-lg-block"><span className="clr-yellow">Prioritizing</span> Player</span> <span className="d-lg-block">Performance</span></h2>
            <p className="mb-0 px-12 ffBarlow text-white fs-lg pt-2">We believe in the power of well-rounded players both <span className="d-lg-block">on and off the field to support thriving football clubs.</span></p>
            <div className="px-12 position-relative pt-2 pb-md-4 pb-lg-0 z-2">
                <button className="mt-4 mt-sm-3 mt-lg-4 heroBtn fw-normal text-uppercase text-black fs-sm bg-yellow navLinkButton ffBarlow" type="button">
                    Book Appointment
                </button>
            </div>
            {/* <div className="d-none d-lg-block">
                <img src={scouting} alt="football img team" loading='lazy' className='position-absolute bottom-0 herofootballimg' />
            </div>
            <img src={scouting} alt="football img team" height={530} loading='lazy' className='w-100 pt-5 mt-3 mt-sm-0 d-lg-none object-fit-cover heroscoutingImg' /> */}
            <div className="mt-5 mt-lg-0 d-flex justify-content-end">
                <img className="end-0 bottom-0 common_hero_position z-0 talk-img herofootballimg" src={scouting} alt="hero-right-charactors"></img>
            </div>
        </>
    )
}

export default HeroScouting