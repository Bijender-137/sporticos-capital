import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FooterLogo from "../assets/images/svg/footer_logo.svg";
import { Instagram, Linkdin, Twitter } from "./common/Icons";
const Footer = () => {
  return (
    <>
      <div className="pt-md-5 mt-lg-4">
        <div className="footer-bg-img pb-sm-5">
          <Container className="pb-lg-5">
            <div className="pt-lg-4">
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
                        target="blank"
                        href="https://www.linkedin.com/company/sporticos-capital/"
                        className="icons-bg d-flex justify-content-center align-items-center transition_300"
                      >
                        <Linkdin />
                      </a>
                      <a
                        target="blank"
                        href="https://www.facebook.com/SporticosCapital"
                        className="icons-bg d-flex justify-content-center align-items-center transition_300"
                      >
                        <Twitter />
                      </a>
                      <a
                        target="blank"
                        href="https://www.instagram.com/sporticoscapital/"
                        className="icons-bg d-flex justify-content-center align-items-center transition_300"
                      >
                        <Instagram />
                      </a>
                    </div>
                  </div>
                </Col>
                <Col lg={6} className="pt-4 pt-lg-0">
                  <Row>
                    <Col xs={6} sm={4}>
                      <div className="d-lg-flex justify-content-end">
                        <ul className="mb-0 p-0">
                          <li className="clr-gray fs-sm fw-normal ff-fontspring">
                            Home
                          </li>
                          <li className="mt-3">
                            <a
                              href="#"
                              className="fw-normal fs-xs ffBarlow text-white opacity-07 navlink"
                            >
                              About Us
                            </a>
                          </li>
                          <li className="mt-2">
                            <a
                              href="#"
                              className="fw-normal fs-xs ffBarlow text-white opacity-07 navlink"
                            >
                              Wealth Management
                            </a>
                          </li>
                          <li className="mt-2">
                            <a
                              href="#"
                              className="fw-normal fs-xs ffBarlow text-white opacity-07 navlink"
                            >
                              Debt Funding
                            </a>
                          </li>
                          <li className="mt-2">
                            <a
                              href="#"
                              className="fw-normal fs-xs ffBarlow text-white opacity-07 navlink"
                            >
                              Club Investment
                            </a>
                          </li>
                          <li className="mt-2">
                            <a
                              href="#"
                              className="fw-normal fs-xs ffBarlow text-white opacity-07 navlink"
                            >
                              Player Pathway
                            </a>
                          </li>
                          <li className="mt-2">
                            <a
                              href="#"
                              className="fw-normal fs-xs ffBarlow text-white opacity-07 navlink"
                            >
                              E-Mentoring
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xs={6} sm={4}>
                      <div className="d-lg-flex justify-content-center">
                        <ul className="mb-0 p-0">
                          <li className="clr-gray fs-sm fw-normal ff-fontspring">
                            About
                          </li>
                          <li className="mt-3">
                            <a
                              href="#"
                              className="fw-normal fs-xs ffBarlow text-white opacity-07 navlink"
                            >
                              About
                            </a>
                          </li>
                          <li className="mt-2">
                            <a
                              href="#"
                              className="fw-normal fs-xs ffBarlow text-white opacity-07 navlink"
                            >
                              FAQ
                            </a>
                          </li>
                          <li className="mt-2">
                            <a
                              href="#"
                              className="fw-normal fs-xs ffBarlow text-white opacity-07 navlink"
                            >
                              Contact us
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xs={6} sm={4}>
                      <div className="d-lg-flex justify-content-end pt-4 pt-sm-0">
                        <ul className="mb-0 p-0">
                          <li className="clr-gray fs-sm fw-normal ff-fontspring">
                            Legal
                          </li>
                          <li className="mt-3">
                            <a
                              href="#"
                              className="fw-normal fs-xs ffBarlow text-white opacity-07 navlink"
                            >
                              Terms & Conditions <br /> Privacy Policy
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="bg-yellow ffBarlow fw-normal fs-xs text-black text-center py-3">
          ©Copyright Sporticos-Capital. | All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
