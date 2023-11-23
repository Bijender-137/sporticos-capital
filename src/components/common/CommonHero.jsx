import React from 'react'
import { heroData } from './Helper';
import { useLocation } from 'react-router-dom';

const CommonHero = () => {
    const location = useLocation();
    const currentPathname = location.pathname;
    const currentData = heroData.find((e) => e.path === currentPathname);
    return (
        <>
            {currentData?.mainheading && <h1 className="px-12 fs-6xl ff-fontspring text-white lh-lg-84 z-2 position-relative lh-md-60 mb-0 pt-5 mt-4 py-md-0 my-md-0">
                {currentData.mainheading}<span className='clr-yellow d-md-block'>{currentData.mainheading1}</span> <span>{currentData.mainheading2}</span>
            </h1>}
            {currentData?.button &&
                <div className="position-relative pt-2 z-2 px-12 pb-30 pb-sm-0">
                    <button className="mt-4 mt-sm-3 mt-lg-4 heroBtn fw-normal text-uppercase text-black fs-sm bg-yellow navLinkButton ffBarlow" type="button">
                        {currentData.button}
                    </button>
                </div>
            }
            {currentData?.img &&
                <div className="mt-5 pt-4 mt-lg-0 d-flex justify-content-end ">
                    <img className="end-0 bottom-0 common_hero_position z-0 transfrom-60 talk-img" src={currentData.img} alt="hero-right-charactors"></img>
                </div>
            }

        </>
    )
}

export default CommonHero