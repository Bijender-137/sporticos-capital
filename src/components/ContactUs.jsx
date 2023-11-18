import React from 'react'
import { Container } from 'react-bootstrap'

const ContactUs = () => {
    return (
        <>
            <div className="transfrom-contantus position-relative">
                <Container className='z-2 position-relative'>
                    <div className="contactus-box bg-white py-3 py-sm-4 px-2">
                        <div className="py-3 d-flex flex-column align-items-center px-1">
                            <h5 className='fs-xxl fw-semibold ff-fontspring text-center text-black mb-2 pb-1'>My question isn’t listed above...</h5>
                            <p className='text-center text-black opacity-07 ffBarlow fs-base fw-normal'>We encourage you to reach out using the button below for <span className="d-md-block">additional questions. Thank you</span></p>
                            <button className="heroBtn fw-normal mt-md-2 mt-lg-3 mt-sm-1 text-uppercase text-black fs-sm bg-yellow navLink-button ffBarlow" type="button">
                                CONTACT  US
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ContactUs