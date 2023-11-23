import React from 'react'
import { heroData } from './Helper';
import { useLocation } from 'react-router-dom';

const CommonHero = () => {
    const location = useLocation();
    const currentPathname = location.pathname;
    const currentData = heroData.find((e) => e.path === currentPathname);
    return (
        <>
            <div className='px-12 pt-5 mt-4 py-md-0 my-md-0'>
            {currentData?.mainheading && <h1 className="fs-6xl ff-fontspring text-white lh-lg-84 z-2 position-relative lh-md-60 mb-0 ">
                {currentData.mainheading}<span className='clr-yellow d-md-block'>{currentData.mainheading1}</span> <span>{currentData.mainheading2}</span>
            </h1>
            }
            {currentData?.heading && <h2 className="fs-5xl ff-fontspring text-white z-2 position-relative mb-0">
                {currentData.heading}
            </h2>
            }
            {currentData?.subheading &&
                <p className="mb-0 ffBalow text-white z-2 position-relative pt-2 fw-normal fs-lg">
                {currentData.subheading}
            </p>
            }

            {currentData?.button &&
                <div className="position-relative pt-2 z-2 pb-30 pb-sm-0">
                    <button className="mt-4 mt-sm-3 mt-lg-4 heroBtn fw-normal text-uppercase text-black fs-sm bg-yellow navLinkButton ffBarlow" type="button">
                        {currentData.button}
                    </button>
                </div>
                }
            </div>
            {currentData?.img &&
                <div className="mt-5 pt-4 mt-lg-0 d-flex justify-content-end ">
                    <img className="end-0 bottom-0 common_hero_position z-0 transfrom-60 talk-img" src={currentData.img} alt="hero-right-charactors"></img>
                </div>
            }
            {currentData?.img1 &&
                <div className="mt-5 mt-lg-0 d-flex justify-content-end">
                    <img className="end-0 bottom-0 common_hero_position z-0 faq-img" src={currentData.img1} alt="hero-right-charactors"></img>
                </div>
            }

        </>
    )
}

export default CommonHero