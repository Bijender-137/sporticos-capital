import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PositiveIcon } from './common/Icons';
import { nextlevelData } from './common/Helper';

const Nextlevel = () => {
    // Data for the columns
    // const columnsData = [
    //     'Maintain positive exposure through our marketing packages',
    //     'Outline the road to playing in international leagues',
    //     'Grow our clubs by focusing on existing talent',
    // ];

    return (
        <>
            <div className="py-5">
                <Container>
                    {nextlevelData.map((nextlevel, index) => (
                        <div key={index}>
                            <h5 className='fs-xxl fw-semibold ff-fontspring text-center text-black mb-1'>{nextlevel.heading}</h5>
                            <p className='fs-base ffBarlow opacity-07 text-black fw-normal text-center'>{nextlevel.para}<span className='d-lg-block'>{nextlevel.spanpara}</span></p>
                            <Row className='d-flex justify-content-center pt-lg-3'>
                                {nextlevel.submap.map((levelsub, columnindex) => (
                                    <Col key={columnindex} md={3} sm={6} className='p-sm-0 pt-3 pt-sm-3 pt-lg-0'>
                                        <div className={`nextlevel-box ${columnindex === nextlevel.submap.length - 1 ? 'last-child' : ''}`}>
                                            <div className="d-flex justify-content-center justify-content-md-start">{levelsub.icon}</div>
                                            <p className='ffBarlow fs-base fw-normal text-black mb-0 pt-4 mt-2 mt-md-0 mt-lg-2 text-center text-md-start'>{levelsub.paraBox}</p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    ))}
                </Container>
            </div>
        </>
    );
};

export default Nextlevel;
