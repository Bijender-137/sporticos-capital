import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FooterLogo from "../assets/images/svg/footer_logo.svg";
import { Instagram, Linkdin, Twitter } from "./common/Icons";
const MyFooter = () => {
  return (
    <>
      <div className="pt-5 mt-4">
        <div className="footer-bg-img mt-5 pb-5">
          <Container>
            <div className="pt-4">
              <Row className="py-5 justify-content-between">
                <Col lg={5}>
                  <div>
                    <a href="#">
                      <img
                        width={237}
                        height={47}
                        className="footer-logo-w  w-100"
                        src={FooterLogo}
                        alt="FooterLogo"
                      />
                    </a>
                    <p className="text-white opacity-07 max-w-453 fs-xs fw-normal ffBarlow mt-3">
                      Sporticos Capital is a registered LLC with offices in
                      Bahrain, US and the UK. Our combined experience and
                      diverse team gives us an important vantage point to
                      understand the sports industry's evolving investment
                      landscape.
                    </p>
                    <div className="d-flex align-items-center gap-2 mt-3">
                      <a
                        href="#"
                        className="icons-bg d-flex justify-content-center align-items-center"
                      >
                        <Linkdin />
                      </a>
                      <a
                        href="#"
                        className="icons-bg d-flex justify-content-center align-items-center"
                      >
                        <Twitter />
                      </a>
                      <a
                        href="#"
                        className="icons-bg d-flex justify-content-center align-items-center"
                      >
                        <Instagram />
                      </a>
                    </div>
                  </div>
                </Col>
                <Col lg={5}>
                  <div>
                    <ul className="mb-0">
                      <li className="clr-gray">Home</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default MyFooter;
