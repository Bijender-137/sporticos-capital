import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { sporticoseTeam } from "./Helper2";

const CommonTeam = () => {
  const location = useLocation();
  return (
    <>
      <Container>
        <div className="py-5">
          {sporticoseTeam.map((teams) => {
            const commonteamchange =
              teams.id === teams.id && location.pathname === teams.path;
            return commonteamchange ? (
              <div key={teams.id}>
                <div className="text-center ">
                  <h2 className="ff-fontspring fw-semibold fs-xxl text-black">
                    {teams.mainheading}
                  </h2>
                  {commonteamchange?.para && (
                    <p className="pt-2 mt-1 fw-normal ffBarlow fs-base text-black opacity-07">
                      {teams.para}
                    </p>
                  )}
                </div>
                <Row>
                  <Col md={6}>
                    <div className="common_team_card_shadow p-4 h-100 transition-300">
                      <div className="d-flex  align-items-center">
                        <img
                          width={142}
                          height={142}
                          className="transition-300"
                          src={teams.manimg}
                          alt="founder img"
                        />
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
                        <img
                          width={142}
                          height={142}
                          className="transition-300"
                          src={teams.girlImg}
                          alt="founder img"
                        />
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
