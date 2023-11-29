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
          <div className="position-absolute position_chat_box">
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
                    about
                      ? "pb-3 pb-sm-4 pb-md-1 pb-lg-5 mb-lg-2"
                      : "pt-lg-2"
                  }`}
                  key={index}
                >
                  <div className="text-center pb-4 pb-lg-5">
                    <h5 className="ff-fontspring fw-semibold fs-xxl text-black mb-0">
                      {data.title}
                    </h5>
                    <p
                      className={`fw-normal ff-barlow fs-base text-black opacity-07 mb-0 home_mainpara_w m-auto ${
                        home ? "pt-2 mt-1  " : ""
                      }`}
                    >
                      {data.description}
                    </p>
                  </div>
                  <Row className="py-4">
                    <Col
                      lg={6}
                      data-aos="fade-down"
                      data-aos-delay="200"
                      data-aos-ease="linear"
                    >
                      <div className="common_team_card_shadow p-4 h-100 transition-300 common_card_w m-auto">
                        <div className="d-flex align-items-center">
                          <div className="common_team_border common_img_w">
                            <img
                              className="transition-300 w-100"
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
                        <p className="ff-barlow fw-normal fs-base text-black opacity-07 lh-24 max_w_535 pt-4 pb-md-3 mb-0">
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
                      <div className="common_team_card_shadow p-4 transition-300 mt-4 mt-lg-0 common_card_w m-auto">
                        <div className="d-flex align-items-center">
                          <div className="common_team_border common_img_w">
                            <img
                              className="transition-300 w-100"
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
                        <p className="ff-barlow fw-normal fs-base text-black opacity-07 lh-24 max_w_535 pt-4 pb-md-3 mb-0">
                          {data.descriptionpara}
                        </p>
                      </div>
                    </Col>
                  </Row>
                  {home && (
                    <div className="d-flex justify-content-center pt-4 mt-md-2 mt-lg-0 pt-lg-5">
                      <Link
                        to="/about-us"
                        className="fw-normal text-uppercase text-black fs-sm bg-yellow transition_300 navLink-button ff-barlow"
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
