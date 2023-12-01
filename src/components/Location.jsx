import React from 'react'
import loactionImg from '../assets/images/webp/location-img-about-us.webp'
import { Container } from 'react-bootstrap'

const Location = () => {
    return (
        <>
            <Container>
                <div className='location-box mx-auto' >
                    <img data-aos="fade-up" data-aos-duration="500" loading='lazy' src={loactionImg} alt="loaction img about us" className='w-100 h-100' />
                </div>
            </Container>
        </>
    )
}

export default Location