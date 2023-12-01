import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { commonCardData } from "./Helper";
import { useLocation } from "react-router-dom";
const CommonCards = () => {
  const location = useLocation();
  return (
    <>
      <div className="py-5">
        <Container className="py-lg-5">
          <div className="py-xl-3">
            {commonCardData.map((dreamsplayer, index) => {
              const dreamplayerchange = location.pathname === dreamsplayer.path;
              return dreamplayerchange ? (
                <div key={index}>
                  <h3 className="ff-fontspring fw-semibold fs-xxl lh-42 text-center text-capitalize mb-0">
                    {dreamsplayer.title}
                  </h3>
                  <p
                    style={{ maxWidth: dreamsplayer.parawidth }}
                    className={`ff-barlow opacity-07 fw-normal fs-base text-black text-center mb-0 pt-1 m-auto`}
                  >
                    {dreamsplayer.description}{" "}
                    <span className="fw-bold">{dreamsplayer.para1}</span>
                  </p>
                  <Row
                    className={`pt-4 pt-lg-5 justify-content-center ${dreamsplayer.cardStyle} `}
                  >
                    <Col
                      sm={6}
                      lg={4}
                      data-aos="fade-down"
                      data-aos-delay="200"
                      data-aos-ease="linear"
                      className="d-flex justify-content-center"
                    >
                      <div className="dreamplayer-shadow bg-white transition_300 p-3 h-100">
                        <img
                          className="w-100 overflow-hidden transition_300"
                          src={dreamsplayer.cardImage1}
                          alt="dream img"
                        />
                        <p className="fw-semibold text-black fs-base ff-fontspring pt-4 mt-1 mb-0">
                          {dreamsplayer.subtitle}
                        </p>
                        <p className="fw-normal ff-barlow fs-base text-black opacity-07 pt-2 pe-xl-5 pe-lg-3 mb-0">
                          {dreamsplayer.subdescription}
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
                      <div className="dreamplayer-shadow bg-white transition_300 p-3 h-100 ">
                        <img
                          className="w-100 overflow-hidden transition_300"
                          src={dreamsplayer.cardImage2}
                          alt="dream img"
                        />
                        <p className="fw-semibold text-black fs-base ff-fontspring pt-4 mt-1 mb-0">
                          {dreamsplayer.subtitle2}
                        </p>
                        <p className="fw-normal ff-barlow fs-base text-black opacity-07 pt-2 pe-xl-5 pe-lg-3 me-xl-1 mb-0">
                          {dreamsplayer.subdescription2}
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
                      <div className="dreamplayer-shadow bg-white p-3 h-100 transition_300">
                        <img
                          className="w-100 overflow-hidden transition_300"
                          src={dreamsplayer.cardImage3}
                          alt="dream img"
                        />
                        <p className="fw-semibold text-black fs-base ff-fontspring pt-4 mt-1 mb-0">
                          {dreamsplayer.subtitle3}
                        </p>
                        <p className="fw-normal ff-barlow fs-base text-black opacity-07 pt-2 pe-xl-5 pe-lg-3 me-xl-1 mb-0">
                          {dreamsplayer.subdescription3}
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
