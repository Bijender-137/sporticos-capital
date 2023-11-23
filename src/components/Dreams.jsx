import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { dreams } from "./common/Helper2";
import { useLocation } from "react-router-dom";

const Dreams = () => {
  const location = useLocation();
  return (
    <>
      <div className="py-5">
        <Container className="py-lg-5">
          <div className="py-md-3">
            {dreams.map((dreamsplayer) => {
              const dreamplayerchange =
                dreamsplayer.id === dreamsplayer.id &&
                location.pathname === dreamsplayer.pathName;
              return dreamplayerchange ? (
                <div key={dreamsplayer.id}>
                  <p className="ff-fontspring fw-normal fs-xxl lh-42 text-center text-capitalize mb-0">
                    {dreamsplayer.heading}
                  </p>
                  <p className="ffBarlow opacity-07 fw-normal fs-base text-black text-center mb-0 pt-1 m-auto max-w-500">
                    {dreamsplayer.para}
                  </p>
                  <Row className="pt-3 pt-sm-4 pt-lg-5 justify-content-center">
                    <Col sm={6} lg={4} className="d-flex justify-content-center">
                      <div className="dreamPlayer-shadow p-3 h-100">
                        <img
                          className="w-100 overflow-hidden transition_300"
                          src={dreamsplayer.dremImg}
                          alt="dream img"
                        />
                        <h2 className="fw-sembild text-black fs-base ff-fontspring pt-4 mt-1">
                          {dreamsplayer.subHead}
                        </h2>
                        <p className="fw-normal ffBarlow fs-base text-black opacity-07 pt-2 pe-xl-5 pe-lg-3 mb-0">
                          {dreamsplayer.paragraph}
                        </p>
                      </div>
                    </Col>
                    <Col sm={6} lg={4} className="pt-3 pt-sm-0 d-flex justify-content-center">
                      <div className="dreamPlayer-shadow p-3 h-100 ">
                        <img
                          className="w-100 overflow-hidden transition_300"
                          src={dreamsplayer.dremImg2}
                          alt="dream img"
                        />
                        <h2 className="fw-sembild text-black fs-base ff-fontspring pt-4 mt-1">
                          {dreamsplayer.subHead2}
                        </h2>
                        <p className="fw-normal ffBarlow fs-base text-black opacity-07 pt-2 pe-xl-5 pe-lg-3 me-xl-1 mb-0">
                          {dreamsplayer.paragraph2}
                        </p>
                      </div>
                    </Col>
                    <Col sm={6} lg={4} className="pt-3 pt-lg-0 d-flex justify-content-center">
                      <div className="dreamPlayer-shadow p-3 h-100 transition_300">
                        <img
                          className="w-100 overflow-hidden transition_300"
                          src={dreamsplayer.dremImg3}
                          alt="dream img"
                        />
                        <h2 className="fw-sembild text-black fs-base ff-fontspring pt-4 mt-1">
                          {dreamsplayer.subHead3}
                        </h2>
                        <p className="fw-normal ffBarlow fs-base text-black opacity-07 pt-2 pe-xl-5 pe-lg-3 me-xl-1 mb-0">
                          {dreamsplayer.paragraph3}
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              ) : null;
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Dreams;
