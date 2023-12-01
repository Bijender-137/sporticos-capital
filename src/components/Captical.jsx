import React from 'react'
import captialImg from '../assets/images/webp/captial-sports-img.webp'
import { Container } from 'react-bootstrap'

const Captical = () => {
    return (
        <>
            <div className='pt-lg-5'>
                <Container className='pt-lg-4 mt-xl-2'>
                    <h3 className="fs-xxl fw-semibold ff-fontspring text-center text-black mb-0">Propelling Your Capital Forward</h3>
                    <p className="fs-base ff-barlow opacity-07 text-black fw-normal text-center mb-0">
                        To elevate each club’s growth potential and amplify your returns, we:
                    </p>
                    <img src={captialImg} alt="captial img" className='w-100 mt-4 mt-lg-5' />
                </Container >
            </div>
        </>
    )
}

export default Captical