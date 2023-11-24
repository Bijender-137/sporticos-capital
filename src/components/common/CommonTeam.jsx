import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { sporticoseTeam } from "./Helper2";

const CommonTeam = () => {
  const location = useLocation();
  const [about, setAbout] = useState(false);
  useEffect(() => {
    setAbout(location.pathname === "/about-us");
  }, [location.pathname]);
  return (
    <>
      <Container>
        <div className={`${about ? "py-lg-5 mb-4" : ""}`}>
          {sporticoseTeam.map((teams) => {
            const commonteamchange =
              teams.id === teams.id && location.pathname === teams.path;
            return commonteamchange ? (
              <div className="pb-5" key={teams.id}>
                <div className="text-center mb-5">
                  <h2 className="ff-fontspring fw-semibold fs-xxl text-black mb-0">
                    {teams.mainheading}
                  </h2>
                  {commonteamchange?.para && (
                    <p className="pt-2 mt-1 fw-normal ffBarlow fs-base text-black opacity-07 mb-0">
                      {teams.para}
                    </p>
                  )}
                </div>
                <Row className="mb-5">
                  <Col md={6}>
                    <div className="common_team_card_shadow p-4 h-100 transition-300">
                      <div className="d-flex  align-items-center">
                        <div className="common_team_border">
                          <img
                            width={142}
                            height={142}
                            className="transition-300"
                            src={teams.manimg}
                            alt="founder img"
                          />
                        </div>
                        <div className="text-start ps-4 ms-2">
                          <h3 className="ff-fontspring fs-lg clr_lite_green fw-normal">
                            {teams.heading}
                          </h3>
                          <h3 className="ffBarlow fw-normal text-black opacity-07 fs-base pt-1">
                            {teams.subheading}
                          </h3>
                        </div>
                      </div>
                      <p className="ffBarlow fw-normal fs-base text-black opacity-07 lh-24 max_w_535 pt-4 pb-3">
                        {teams.para}
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="common_team_card_shadow p-4 h-100 transition-300">
                      <div className="d-flex  align-items-center">
                        <div className="common_team_border">
                          <img
                            width={142}
                            height={142}
                            className="transition-300"
                            src={teams.girlImg}
                            alt="founder img"
                          />
                        </div>
                        <div className="text-start ps-4 ms-2">
                          <h3 className="ff-fontspring fs-lg clr_blue fw-normal">
                            {teams.heading2}
                          </h3>
                          <h3 className="ffBarlow fw-normal text-black opacity-07 fs-base pt-1">
                            {teams.subheading2}
                          </h3>
                        </div>
                      </div>
                      <p className="ffBarlow fw-normal fs-base text-black opacity-07 lh-24 max_w_535 pt-4 pb-3">
                        {teams.para2}
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            ) : null;
          })}
        </div>
      </Container>
    </>
  );
};

export default CommonTeam;
