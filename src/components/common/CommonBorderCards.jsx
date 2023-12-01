import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { borderCardData } from "./Helper";

const CommonBorderCards = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  const data = borderCardData.find((e) => e.path === currentPathname);

  const [show, setShow] = useState(false);
  const [edatashow, setEdatashow] = useState(false);
  const [wealth, setWealth] = useState(false);
  const [player, setPlayer] = useState(false);
  const [about, setAbout] = useState(false);
  const [funding, setFunding] = useState(false);

  useEffect(() => {
    setShow(
      location.pathname === "/about-us" || location.pathname === "/debt-funding"
    );
    setEdatashow(location.pathname === "/e-mentoring");
    setWealth(location.pathname === "/wealth-management");
    setPlayer(location.pathname === "/player-pathwa");
    setAbout(location.pathname === "/about-us");
    setFunding(location.pathname === "/debt-funding");
  }, [location.pathname]);

  return (
    <>
      <div className={`${about ? "py-lg-5 mt-md-4" : ""}`}>
        <Container className={` ${about ? "py-5" : ""}`}>
          <p className="fs-xxl fw-semibold ff-fontspring text-center text-black mb-2 pb-1">
            {data.heading}
          </p>
          <p
            className={`fs-base ff-barlow opacity-07 text-black fw-normal text-center max-w-750 mb-4 mx-auto ${data.className}`}
          >
            {data.description}
          </p>
          <div className={`${wealth ? "pt-xl-3" : ""}`}></div>
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
                  }`}
              >
                <div
                  className={`pt-2
                   ${show ? "px-xl-4 mx-xl-3" : ""}
                   ${edatashow ? "px-xl-3 mx-xl-2 mx-xxl-3" : ""}
                   ${wealth && columnindex !== 1 ? "mx-xl-3 px-xl-4" : ""}
                   ${wealth && columnindex === 1 ? "ms-xl-3 px-xl-4" : ""}
                   ${wealth ? "px-xxl-5" : ""}
                   ${subdata.cardstyle}
                   `}
                >
                  <div className="d-flex justify-content-center justify-content-md-start">
                    {subdata.image}
                  </div>
                  <p
                    className={`ff-barlow fs-base fw-normal text-black text-center text-md-start mb-0
                   ${show ? "pt-2 mb-0" : ""}
                   ${edatashow && columnindex !== 0
                        ? "pe-xl-4 pb-2 me-xxl-4"
                        : ""
                      }
                   ${edatashow && columnindex !== 0 && columnindex !== 3
                        ? "pe-xxl-5"
                        : ""
                      }
                   ${wealth ? "py-3 py-xl-4" : ""}
                   ${player ? "py-3 pt-lg-4 mt-2" : ""}
                   ${about ? "pb-3 pb-lg-4 " : ""}
                   ${about && columnindex !== 3 ? "pe-xl-5" : ""}
                   ${funding && columnindex !== 3 ? "pe-xl-4" : ""}
                   ${funding && columnindex === 3 ? "pe-xl-3 me-xl-1" : ""}
                  `}
                  >
                    <span className={`${about ? "fw-medium" : ""}`}>
                      {subdata.paraBox.split(" ")[0]}{" "}
                    </span>
                    {subdata.paraBox.slice(subdata.paraBox.indexOf(" ") + 1)}
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
