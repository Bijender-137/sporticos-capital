import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { sporticoseTeam } from "./Helper";
import { ChatBox } from "./Icons";
const CommonTeam = () => {
  const location = useLocation();
  const [about, setAbout] = useState(false);
  const [home, setHome] = useState(false);
  useEffect(() => {
    setAbout(location.pathname === "/about-us");
    setHome(location.pathname === "/");
  }, [location.pathname]);

  const isChatBoxVisible = location.pathname !== "/about-us";
  return (
    <>
      <div className="position-relative">
        {isChatBoxVisible && (
          <div className="position-absolute chat_box">
            <ChatBox />
          </div>
        )}
        <Container className="py-lg-5">
          <div className="py-5">
            {sporticoseTeam.map((data, index) => {
              const commonteamchange = location.pathname === data.path;
              return commonteamchange ? (
                <div
                  className={`${
                    about ? "pb-3 pb-sm-4 pb-md-1 pb-lg-5 mb-lg-2" : "pt-lg-2"
                  }`}
                  key={index}
                >
                  <div className="text-center pb-4 pb-lg-4">
                    <h3 className="ff-fontspring fw-semibold fs-xxl text-black mb-0">
                      {data.title}
                    </h3>
                    <p
                      className={`fw-normal ff-barlow fs-base text-black opacity-07 mb-0 common_team_paragraph m-auto ${
                        home ? "pt-2 mt-1  " : ""
                      }`}
                    >
                      {data.description}
                    </p>
                  </div>
                  <Row className="py-lg-4 pb-4">
                    <Col
                      lg={6}
                      data-aos="fade-down"
                      data-aos-delay="200"
                      data-aos-ease="linear"
                    >
                      <div className="common_team_card_shadow bg-white p-4 h-100 transition_300 common_card_w m-auto">
                        <div className="d-flex align-items-center">
                          <div className="common_team_border transition_300 common_team_image">
                            <img
                              loading="lazy"
                              className="transition_300 w-100 h-100"
                              src={data.image}
                              alt="founder img"
                            />
                          </div>
                          <div className="text-start ps-md-4 ms-3 ms-md-2">
                            <p className="ff-fontspring fs-lg clr_blue fw-normal mb-0">
                              {data.titlename}
                            </p>
                            <p className="ff-barlow mb-0 fw-normal text-black opacity-07 fs-base pt-1">
                              {data.subtitle}
                            </p>
                          </div>
                        </div>
                        <p className="ff-barlow fw-normal fs-base text-black opacity-07 lh-24 common_team_para_width pt-4 pb-md-3 mb-0">
                          {data.subdescription}
                        </p>
                      </div>
                    </Col>
                    <Col
                      lg={6}
                      data-aos="fade-down"
                      data-aos-delay="400"
                      data-aos-ease="linear"
                    >
                      <div className="common_team_card_shadow bg-white p-4 transition_300 mt-4 mt-lg-0 common_card_w m-auto">
                        <div className="d-flex align-items-center">
                          <div className="common_team_border transition_300 common_team_image">
                            <img
                              loading="lazy"
                              className="transition_300 w-100 h-100"
                              src={data.imageGirl}
                              alt="founder img"
                            />
                          </div>
                          <div className="text-start ps-md-4 ms-3 ms-md-2">
                            <p className="ff-fontspring fs-lg clr_blue fw-normal mb-0">
                              {data.titlename2}
                            </p>
                            <p className="ff-barlow fw-normal text-black opacity-07 fs-base pt-1 mb-0">
                              {data.subtitle}
                            </p>
                          </div>
                        </div>
                        <p className="ff-barlow fw-normal fs-base text-black opacity-07 lh-24 common_team_para_width pt-4 pb-md-3 mb-0">
                          {data.descriptionpara}
                        </p>
                      </div>
                    </Col>
                  </Row>
                  {home && (
                    <div className="d-flex justify-content-center py-lg-4">
                      <Link
                        to="/about-us"
                        className="fw-normal text-uppercase text-black fs-sm bg-yellow transition_300 border-radius-6 common_fill_button ff-barlow"
                      >
                        {data.buttonAbout}
                      </Link>
                    </div>
                  )}
                </div>
              ) : null;
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default CommonTeam;
