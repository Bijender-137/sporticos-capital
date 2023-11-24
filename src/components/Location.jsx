import React from 'react'
import loactionImg from '../assets/images/webp/location-img-about-us.webp'
import { Container } from 'react-bootstrap'

const Location = () => {
    return (
        <>
            <Container>
                <div className='max-w-1005 mx-auto'>
                    <img loading='lazy' src={loactionImg} alt="loaction img about us" className='w-100' />
                </div>
            </Container>
        </>
    )
}

export default Location