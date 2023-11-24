import React, { useEffect, useState } from 'react'
import { heroData } from './Helper';
import { useLocation } from 'react-router-dom';

const CommonHero = () => {
    const location = useLocation();
    const currentPathname = location.pathname;
    const currentData = heroData.find((e) => e.path === currentPathname);
    const isPathActive = (path) => location.pathname === path;
    const [imgset, setImgset] = useState(false);

    useEffect(() => {
        setImgset(location.pathname === '/club-investments' || location.pathname === '/e-mentoring');
    }, [location.pathname]);
    return (
        <>
            <div style={{ maxWidth: currentData.maxW }} className='px-12 pt-5 py-md-0 my-md-0 mb-md-4'>
                {currentData?.mainheading && <h1 className="fs-6xl ff-fontspring text-white lh-lg-84 z-2 position-relative lh-md-60 mb-0 ">
                    {currentData.mainheading}<span className='clr-yellow d-md-block'>{currentData.mainheading1}</span> <span>{currentData.mainheading2}</span>
                </h1>
                }
                {currentData?.heading && <h2 className="fs-5xl ff-fontspring text-white z-2 position-relative mb-0">
                    {currentData.heading}
                    <span className={`clr-yellow ${isPathActive('/player-pathwa') ? 'd-lg-block' : ''}`}>{currentData.heading1}<span className='text-white'>{currentData.headingspan}</span> </span>
                    <span> {currentData.heading2}</span>
                    <span className='clr-yellow'>{currentData.heading3}</span>
                    <span> {currentData.heading4}</span>
                </h2>
                }
                {currentData?.subheading &&
                    <p style={{ maxWidth: currentData.maxW1 }} className="mb-0 ffBarlow text-white z-2 position-relative pt-2 fw-normal fs-lg">
                        {currentData.subheading}
                    </p>
                }
                <div className="d-flex gap-sm-3 gap-max-2">
                    {currentData?.button &&
                        <div className="position-relative pt-2 z-2 pb-30 pb-sm-0">
                            <button className="mt-4 mt-sm-3 mt-lg-4 heroBtn fw-normal text-uppercase text-black fs-sm bg-yellow navLinkButton ffBarlow" type="button">
                                {currentData.button}
                            </button>
                        </div>
                    }
                    {currentData?.buttonhero &&
                        <div className="position-relative pt-2 z-2 pb-30 pb-sm-0">
                            <button className="mt-4 mt-sm-3 mt-lg-4 heroBtn fw-normal text-uppercase text-white fs-sm bg-transparent inline-btn ffBarlow" type="button">
                                {currentData.buttonhero}
                            </button>
                        </div>
                    }
                </div>
            </div>
            {currentData?.img &&
                <div className="mt-5 pt-4 mt-lg-0 d-flex justify-content-end ">
                    <img className={`end-0 bottom-0 common_hero_position z-0 talk-img ${isPathActive('/contant') ? 'transfrom-60' : ''} 
                    ${isPathActive('/about-us') ? 'about-usImg' : ''}
                    ${imgset ? 'clubImg-max-w' : ''}
                    `} src={currentData.img} alt="hero-right-charactors"></img>
                </div>
            }
            {currentData?.img1 &&
                <div className="mt-5 pt-5 mt-lg-0 d-flex justify-content-end">
                    <img className="end-0 bottom-0 common_hero_position z-0 faq-img" src={currentData.img1} alt="hero-right-charactors"></img>
                </div>
            }

        </>
    )
}

export default CommonHero