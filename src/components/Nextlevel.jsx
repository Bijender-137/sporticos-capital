import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { nextlevelData } from "./common/Helper";
import { useLocation } from "react-router-dom";

const Nextlevel = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  const currentData = nextlevelData.find((e) => e.path === currentPathname);

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(location.pathname === '/about-us' || location.pathname === '/debt-funding');
  }, [location.pathname]);

  return (
    <>
      <Container>
        <div className={` ${show ? 'pb-5' : ''}`}>
          <p className="fs-xxl fw-semibold ff-fontspring text-center text-black mb-1">
            {currentData.heading}
          </p>
          <p className={`fs-base ffBarlow opacity-07 text-black fw-normal text-center
          ${show ? 'max-w-790 mx-auto mb-md-4' : ''}
          `}>
            {currentData.para}
            <span className="d-lg-block">{currentData.spanpara}</span>
          </p>
          <Row className={`d-flex justify-content-center pt-lg-4`}>
            {currentData.submap.map((levelsub, columnindex) => (
              <Col
                key={columnindex}
                md={3}
                xs={6}
                className={`pt-3 pt-md-0 ${columnindex === currentData.submap.length - 1 ? 'last-child' : 'border-end-yellow'}`}
              >
                <div
                  className={`
                   ${show ? 'px-xl-4 mx-xl-2' : ''}
                  `}
                >
                  <div className="d-flex justify-content-center justify-content-md-start">
                    {levelsub.icon}
                  </div>
                  <p className={`ffBarlow fs-base fw-normal text-black text-center text-md-start
                   ${show ? 'pt-2 mb-0' : ''}
                  `}>
                    {levelsub.paraBox}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Nextlevel;
