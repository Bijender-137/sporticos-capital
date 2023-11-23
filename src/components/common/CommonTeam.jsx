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
                  <Row>
                    <Col md={6}>
                      <div>
                        <img
                          width={142}
                          height={142}
                          className=""
                          src={teams.manimg}
                          alt="founder img"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            ) : null;
          })}
        </div>
      </Container>
    </>
  );
};

export default CommonTeam;
