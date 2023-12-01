import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { contactData } from './Helper';

const CommonContactUs = () => {
    const location = useLocation();
    const currentPathname = location.pathname;
    const data = contactData.find((e) => e.path === currentPathname);

    return (
        <>
            <div className="transfrom-contantus position-relative">
                <Container className='z-2 position-relative'>
                    <div className="contactus-box bg-white py-3 py-sm-4 px-2">
                        <div className="py-3 d-flex flex-column align-items-center px-1">
                            <h5 className='fs-xxl fw-semibold ff-fontspring text-center text-black mb-2 pb-1'>
                                {data.title}
                            </h5>
                            <p className={`text-center text-black opacity-07 ff-barlow fs-base fw-normal ${data.descriptionStyle}`}>
                                {data.description}
                            </p>
                            <Link to="/contact" className="fw-normal mt-md-2 mt-lg-3 mt-sm-1 text-uppercase text-black fs-sm bg-yellow transition_300 common_fill_button ff-barlow">
                                {data.button}
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default CommonContactUs;