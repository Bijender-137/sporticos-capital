import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PositiveIcon } from './common/Icons';

const Nextlevel = () => {
    // Data for the columns
    const columnsData = [
        'Maintain positive exposure through our marketing packages',
        'Outline the road to playing in international leagues',
        'Grow our clubs by focusing on existing talent',
    ];

    return (
        <>
            <Container>
                <h5 className='fs-xxl fw-semibold ff-fontspring text-center text-black mb-1'>Guiding Players to the Next Level</h5>
                <p className='fs-base ffBarlow opacity-07 text-black fw-normal text-center mb-0'>While players within our athlete network focus on honing their <span className="d-lg-block">football skills, we:</span></p>
                <Row className='d-flex justify-content-center p-0'>
                    {columnsData.map((text, index) => (
                        <Col key={index} lg={3} md={6} className='p-0'>
                            <div className="nextlevel-box">
                                <PositiveIcon />
                                <p className='ffBarlow fs-base fw-normal text-black mb-0 pt-4 mt-2'>{text}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Nextlevel;
