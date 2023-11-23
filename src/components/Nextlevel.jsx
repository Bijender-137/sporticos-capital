import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { nextlevelData } from "./common/Helper";
import { useLocation } from "react-router-dom";

const Nextlevel = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  const currentData = nextlevelData.find((e) => e.path === currentPathname);

  return (
    <Container>
      <div>
        <h5 className="fs-xxl fw-semibold ff-fontspring text-center text-black mb-1">
          {currentData.heading}
        </h5>
        <p className="fs-base ffBarlow opacity-07 text-black fw-normal text-center mb-0 mb-md-2 mb-lg-3">
          {currentData.para}
          <span className="d-lg-block">{currentData.spanpara}</span>
        </p>
        <Row className="d-flex justify-content-center pt-lg-3">
          {currentData.submap.map((levelsub, columnindex) => (
            <Col
              key={columnindex}
              md={4}
              lg={3}
              sm={6}
              className="p-sm-0 pt-3 pt-sm-3 pt-lg-0"
            >
              <div
                className={`nextlevel-box ${columnindex === currentData.submap.length - 1
                    ? "last-child"
                    : ""
                  }`}
              >
                <div className="d-flex justify-content-center justify-content-md-start">
                  {levelsub.icon}
                </div>
                <p className="ffBarlow fs-base fw-normal text-black mb-0 pt-4 mt-2 mt-md-0 mt-lg-2 text-center text-md-start">
                  {levelsub.paraBox}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Nextlevel;
