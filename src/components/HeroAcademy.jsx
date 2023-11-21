import React from 'react'
import heroacademy from '../assets/images/webp/academy-hero-img.webp'

const HeroAcademy = () => {
    return (
        <>
            <h1 className="fs-6xl ff-fontspring text-white lh-lg-84 z-2 position-relative lh-md-60 mb-0 text-center text-lg-start pt-5 pb-4 mt-4 mt-sm-0 py-lg-0">Frequently <span className='d-lg-block clr-yellow'>Asked</span> Questions</h1>
            {/* <div className="d-none d-lg-block">
                <img src={heroacademy} alt="football img team" loading='lazy' className='position-absolute bottom-0 heroimgacademy' />
            </div>
            <img src={heroacademy} alt="football img team" height={550} loading='lazy' className='w-100 mt-5 d-lg-none object-fit-cover' /> */}
            <img class="end-0 bottom-0 common_hero_position z-0 faq-img" src={heroacademy} alt="hero-right-charactors"></img>
        </>
    )
}

export default HeroAcademy