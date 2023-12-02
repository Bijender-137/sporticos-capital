import React from 'react'
import { heroData } from './Helper';
import { Link, useLocation } from 'react-router-dom';
import "../../assets/style/Commonhero.css"
import { Container } from 'react-bootstrap';

const CommonHero = () => {
    const location = useLocation();
    const currentPathname = location.pathname;
    const data = heroData.find((e) => e.path === currentPathname);

    return (
        <>
            <Container className='pb-md-5 mb-md-5 pb-lg-0 mb-lg-0 '>
                <div className={`pb-md-4 pb-xl-0 ${data.headingStyle}`}>
                    {data?.mainheading && <h1 className="fs-4xl fw-bold ff-fontspring text-white  z-2 position-relative heaing-lh mb-0 ">
                        {data.mainheading}
                    </h1>
                    }
                    {data?.heading && <h2 className={`fs-3xl fw-bold ff-fontspring text-white z-2 position-relative mb-0 ${data.headingClassName}`}>
                        {data.heading}
                    </h2>
                    }
                    {data?.description &&
                        <p className={`mb-0 opacity-07 ff-barlow text-white z-2 position-relative pt-2 fw-normal fs-lg ${data.descriptionStyle}`}>
                            {data.description}
                        </p>
                    }
                    <div className="d-flex gap-2 gap-sm-3">
                        {data?.button &&
                            <div className="pt-3 mt-md-3">
                                <Link className="transition_300 fw-normal text-uppercase text-black hero-inlineBtn fs-sm bg-yellow ff-barlow" type="button">
                                    {data.button}
                                </Link>
                            </div>
                        }
                        {data?.transparentButton &&
                            <div className="pt-3 mt-md-3">
                                <button className="transition_300 fw-normal text-uppercase text-white fs-sm hero-outlineBtn bg-transparent ff-barlow" type="button">
                                    {data.transparentButton}
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </Container>
            {data?.image &&
                <div className="mt-5 mt-lg-0 d-flex justify-content-end">
                    <img className={`end-0 bottom-0 position-absolute z-0 ${data.imageStyle}`}
                        src={data.image} alt="hero-right-charactors"></img>
                </div>
            }
        </>
    )
}

export default CommonHero