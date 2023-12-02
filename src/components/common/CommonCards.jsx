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
            {commonCardData.map((data, index) => {
              const dreamplayerchange = location.pathname === data.path;
              return dreamplayerchange ? (
                <div key={index}>
                  <h3 className="ff-fontspring fw-semibold fs-xxl lh-42 text-center text-capitalize mb-0">
                    {data.title}
                  </h3>
                  <p
                    style={{ maxWidth: data.parawidth }}
                    className={`ff-barlow opacity-07 fw-normal fs-base text-black text-center mb-0 pt-1 m-auto`}
                  >
                    {data.description}{" "}
                    <span className="fw-bold">{data.para1}</span>
                  </p>
                  <Row
                    className={`pt-4 pt-lg-5 justify-content-center ${data.cardStyle} `}
                  >
                    <Col
                      sm={6}
                      lg={4}
                      data-aos="fade-down"
                      data-aos-delay="200"
                      data-aos-ease="linear"
                      className="d-flex justify-content-center"
                    >
                      <div className="common_cards_shadow bg-white transition_300 p-3 h-100">
                        <img
                          loading="lazy"
                          className="w-100 overflow-hidden transition_300"
                          src={data.cardImage1}
                          alt="dream img"
                        />
                        <p className="fw-semibold text-black fs-base ff-fontspring pt-4 mt-1 mb-0">
                          {data.subtitle}
                        </p>
                        <p className="fw-normal ff-barlow fs-base text-black opacity-07 pt-2 pe-xl-5 pe-lg-3 mb-0">
                          {data.subdescription}
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
                      <div className="common_cards_shadow bg-white transition_300 p-3 h-100 ">
                        <img
                          loading="lazy"
                          className="w-100 overflow-hidden transition_300"
                          src={data.cardImage2}
                          alt="dream img"
                        />
                        <p className="fw-semibold text-black fs-base ff-fontspring pt-4 mt-1 mb-0">
                          {data.subtitle2}
                        </p>
                        <p className="fw-normal ff-barlow fs-base text-black opacity-07 pt-2 pe-xl-5 pe-lg-3 me-xl-1 mb-0">
                          {data.subdescription2}
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
                      <div className="common_cards_shadow bg-white p-3 h-100 transition_300">
                        <img
                          loading="lazy"
                          className="w-100 overflow-hidden transition_300"
                          src={data.cardImage3}
                          alt="dream img"
                        />
                        <p className="fw-semibold text-black fs-base ff-fontspring pt-4 mt-1 mb-0">
                          {data.subtitle3}
                        </p>
                        <p className="fw-normal ff-barlow fs-base text-black opacity-07 pt-2 pe-xl-5 pe-lg-3 me-xl-1 mb-0">
                          {data.subdescription3}
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
