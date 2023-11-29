import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { dreams } from "./Helper";
import { useLocation } from "react-router-dom";
const CommonCards = () => {
  const location = useLocation();
  return (
    <>
      <div className="py-5">
        <Container className="py-lg-5">
          <div className="py-md-3">
            {dreams.map((dreamsplayer, index) => {
              const dreamplayerchange = location.pathname === dreamsplayer.path;
              return dreamplayerchange ? (
                <div key={index}>
                  <p className="ff-fontspring fw-normal fs-xxl lh-42 text-center text-capitalize mb-0">
                    {dreamsplayer.heading}
                  </p>
                  <p
                    style={{ maxWidth: dreamsplayer.maxW }}
                    className={`ff-barlow opacity-07 fw-normal fs-base text-black text-center mb-0 pt-1 m-auto`}
                  >
                    {dreamsplayer.para}{" "}
                    <span className="fw-bold">{dreamsplayer.para1}</span>
                  </p>
                  <Row className="pt-4 pt-lg-5 justify-content-center">
                    <Col
                      sm={6}
                      lg={4}
                      data-aos="fade-down"
                      data-aos-delay="200"
                      data-aos-ease="linear"
                      className="d-flex justify-content-center"
                    >
                      <div className="dreamPlayer-shadow p-3 h-100">
                        <img
                          className="w-100 overflow-hidden transition_300"
                          src={dreamsplayer.dremImg}
                          alt="dream img"
                        />
                        <h2 className="fw-sembild text-black fs-base ff-fontspring pt-4 mt-1">
                          {dreamsplayer.subHead}
                        </h2>
                        <p className="fw-normal ff-barlow fs-base text-black opacity-07 pt-2 pe-xl-5 pe-lg-3 mb-0">
                          {dreamsplayer.paragraph}
                        </p>
                      </div>
                    </Col>
                    <Col
                      sm={6}
                      data-aos="fade-down"
                      data-aos-delay="400"
                      data-aos-ease="linear"
                      lg={4}
                      className="pt-4 pt-sm-0 d-flex justify-content-center"
                    >
                      <div className="dreamPlayer-shadow p-3 h-100 ">
                        <img
                          className="w-100 overflow-hidden transition_300"
                          src={dreamsplayer.dremImg2}
                          alt="dream img"
                        />
                        <h2 className="fw-sembild text-black fs-base ff-fontspring pt-4 mt-1">
                          {dreamsplayer.subHead2}
                        </h2>
                        <p className="fw-normal ff-barlow fs-base text-black opacity-07 pt-2 pe-xl-5 pe-lg-3 me-xl-1 mb-0">
                          {dreamsplayer.paragraph2}
                        </p>
                      </div>
                    </Col>
                    <Col
                      sm={6}
                      lg={4}
                      data-aos="fade-down"
                      data-aos-delay="600"
                      data-aos-ease="linear"
                      className="pt-4 pt-lg-0 d-flex justify-content-center"
                    >
                      <div className="dreamPlayer-shadow p-3 h-100 transition_300">
                        <img
                          className="w-100 overflow-hidden transition_300"
                          src={dreamsplayer.dremImg3}
                          alt="dream img"
                        />
                        <h2 className="fw-sembild text-black fs-base ff-fontspring pt-4 mt-1">
                          {dreamsplayer.subHead3}
                        </h2>
                        <p className="fw-normal ff-barlow fs-base text-black opacity-07 pt-2 pe-xl-5 pe-lg-3 me-xl-1 mb-0">
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

export default CommonCards;
