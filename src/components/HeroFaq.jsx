import React from 'react'
import heroacademy from '../assets/images/webp/academy-hero-img.webp'

const HeroFaq = () => {
    return (
        <>
            <h1 className="px-12 fs-6xl ff-fontspring text-white lh-lg-84 z-2 position-relative lh-md-60 mb-0 py-5 my-4 pb-sm-0 mb-sm-0 py-md-0 my-md-0">Frequently <span className='d-md-block clr-yellow'>Asked</span> Questions</h1>
            <div className="mt-5 mt-lg-0 d-flex justify-content-end">
                <img className="end-0 bottom-0 common_hero_position z-0 faq-img" src={heroacademy} alt="hero-right-charactors"></img>
            </div>
        </>
    )
}

export default HeroFaq