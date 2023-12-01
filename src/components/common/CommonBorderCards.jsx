import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { borderCardData } from "./Helper";

const CommonBorderCards = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  const data = borderCardData.find((e) => e.path === currentPathname);

  const [player, setPlayer] = useState(false);
  const [about, setAbout] = useState(false);


  useEffect(() => {
    setPlayer(location.pathname === "/player-pathwa");
    setAbout(location.pathname === "/about-us");
  }, [location.pathname]);

  return (
    <>
      <div className={`${data.sectionClass}`}>
        <Container className={` ${about ? "pt-lg-4" : ""}`}>
          <h3 className="fs-xxl fw-semibold ff-fontspring text-center text-black mb-2 pb-1">
            {data.title}
          </h3>
          <p
            className={`fs-base ff-barlow opacity-07 text-black fw-normal text-center border-card-paragraph mb-4 mx-auto ${data.className}`}
          >
            {data.description}
          </p>
          <div className={`${data.Style}`}></div>
          <Row className={`d-flex justify-content-center pt-lg-4`}>
            {data.submap.map((subdata, columnindex, index) => (
              <Col
                key={index}
                data-aos="fade-down"
                data-aos-delay={subdata.aosDelay}
                data-aos-ease="linear"
                md={player ? 4 : 3}
                lg={player ? 3 : 3}
                xs={6}
                className={`pt-3 pt-md-0 ${columnindex === data.submap.length - 1 ? "last-child" : "border-end-yellow"
                  }`} >
                <div className={`pt-2 ${subdata.cardstyle}`} >
                  <div className="d-flex justify-content-center justify-content-md-start">
                    {subdata.image}
                  </div>
                  <p className={`ff-barlow fs-base fw-normal text-black text-center text-md-start mb-0
                   ${subdata.descriptionStyle} `}>
                    {subdata.description}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CommonBorderCards;
