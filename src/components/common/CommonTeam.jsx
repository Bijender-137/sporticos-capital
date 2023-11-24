import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { sporticoseTeam } from "./Helper2";

const CommonTeam = () => {
  const location = useLocation();
  const [about, setAbout] = useState(false);
  const [home, setHome] = useState(false);
  useEffect(() => {
    setAbout(location.pathname === "/about-us");
    setHome(location.pathname === "/");
  }, [location.pathname]);
  return (
    <>
      <Container>
        <div className={`${about ? "py-5 my-md-5" : "py-5 mt-md-5"}`}>
          {sporticoseTeam.map((teams) => {
            const commonteamchange = location.pathname === teams.path;
            return commonteamchange ? (
              <div className="pb-lg-5 pt-2" key={teams.id}>
                <div className="text-center mb-4 mb-md-5">
                  <h5 className="ff-fontspring fw-semibold fs-xxl text-black mb-0">
                    {teams.mainheading}
                  </h5>

                  <p
                    className={` fw-normal ffBarlow fs-base text-black opacity-07 mb-0 home_mainpara_w m-auto ${home ? "pt-2 mt-1  " : ""
                      }`}
                  >
                    {teams.mainpara}
                  </p>
                </div>
                <Row className="py-4">
                  <Col lg={6}>
                    <div className="common_team_card_shadow p-4 h-100 transition-300 common_card_w m-auto">
                      <div className="d-flex  align-items-center">
                        <div className="common_team_border common_img_w">
                          <img
                            className="transition-300 w-100"
                            src={teams.manimg}
                            alt="founder img"
                          />
                        </div>
                        <div className="text-start ps-md-4 ms-3 ms-md-2">
                          <h3 className="ff-fontspring fs-lg clr_lite_green fw-normal">
                            {teams.heading}
                          </h3>
                          <h3 className="ffBarlow fw-normal text-black opacity-07 fs-base pt-1">
                            {teams.subheading}
                          </h3>
                        </div>
                      </div>
                      <p className="ffBarlow fw-normal fs-base text-black opacity-07 lh-24 max_w_535 pt-4 pb-md-3 mb-0">
                        {teams.para}
                      </p>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="common_team_card_shadow p-4 h-100 transition-300 mt-4 mt-lg-0 common_card_w m-auto">
                      <div className="d-flex align-items-center">
                        <div className="common_team_border common_img_w">
                          <img
                            className="transition-300 w-100"
                            src={teams.girlImg}
                            alt="founder img"
                          />
                        </div>
                        <div className="text-start ps-md-4 ms-3 ms-md-2">
                          <h3 className="ff-fontspring fs-lg clr_blue fw-normal">
                            {teams.heading2}
                          </h3>
                          <h3 className="ffBarlow fw-normal text-black opacity-07 fs-base pt-1">
                            {teams.subheading2}
                          </h3>
                        </div>
                      </div>
                      <p className="ffBarlow fw-normal fs-base text-black opacity-07 lh-24 max_w_535 pt-4 pb-md-3 mb-0">
                        {teams.para2}
                      </p>
                    </div>
                  </Col>
                </Row>
                {home && (
                  <div className="d-flex justify-content-center pt-3 pt-sm-4 pt-lg-5">
                    <Link
                      to="/about-us"
                      className="heroBtn fw-normal text-uppercase text-black fs-sm bg-yellow navLink-button ffBarlow"
                    >
                      {teams.btn}
                    </Link>
                  </div>
                )}
              </div>
            ) : null;
          })}
        </div>
      </Container>
    </>
  );
};

export default CommonTeam;
