import React from 'react'
import { heroData } from './Helper';
import { useLocation } from 'react-router-dom';
import "../../assets/style/Commonhero.css"
import { Container } from 'react-bootstrap';

const CommonHero = () => {
    const location = useLocation();
    const currentPathname = location.pathname;
    const currentData = heroData.find((e) => e.path === currentPathname);

    return (
        <>
            <Container className='pb-md-5 mb-md-5'>
                <div style={{ maxWidth: currentData.maxW }} className='pb-md-4'>
                    {currentData?.mainheading && <h1 className="fs-6xl ff-fontspring text-white lh-lg-84 z-2 position-relative lh-md-60 mb-0 ">
                        {currentData.mainheading}
                    </h1>
                    }
                    {currentData?.heading && <h2 className="fs-5xl ff-fontspring text-white z-2 position-relative mb-0">
                        {currentData.heading}
                    </h2>
                    }
                    {currentData?.subheading &&
                        <p style={{ maxWidth: currentData.maxW1 }} className="mb-0 opacity-07 ff-barlow text-white z-2 position-relative pt-2 fw-normal fs-lg">
                            {currentData.subheading}
                        </p>
                    }
                    <div className="d-flex">
                        {currentData?.button &&
                            <div className="position-relative pt-2 z-2 pb-sm-0">
                                <button className="transition_300 mt-sm-3 mt-lg-4 fw-normal text-uppercase text-black hero-inlineBtn fs-sm bg-yellow ff-barlow" type="button">
                                    {currentData.button}
                                </button>
                            </div>
                        }
                        {currentData?.buttonhero &&
                            <div className="position-relative pt-2 z-2 pb-sm-0 ms-2 ms-sm-3">
                                <button className="transition_300 mt-sm-3 mt-lg-4 fw-normal text-uppercase text-white fs-sm hero-outlineBtn bg-transparent ff-barlow" type="button">
                                    {currentData.buttonhero}
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </Container>
            {currentData?.img &&
                <div className="mt-5 mt-lg-0 d-flex justify-content-end">
                    <img className={`end-0 bottom-0 position-absolute z-0 ${currentData.className}`}
                        src={currentData.img} alt="hero-right-charactors"></img>
                </div>
            }
        </>
    )
}

export default CommonHero