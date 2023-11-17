import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FooterLogo from "../assets/images/svg/footer_logo.svg";
import { Instagram, Linkdin, Twitter } from "./common/Icons";
const MyFooter = () => {
  return (
    <>
      <div className="pt-5 mt-4">
        <div className="footer-bg-img mt-5 pb-5">
          <Container className="pb-4">
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
                              className="fw-normal fs-xs ffBarlow text-white opacity-07"
                            >
                              About Us
                            </a>
                          </li>
                          <li className="mt-2">
                            <a
                              href="#"
                              className="fw-normal fs-xs ffBarlow text-white opacity-07"
                            >
                              Wealth Management
                            </a>
                          </li>
                          <li className="mt-2">
                            <a
                              href="#"
                              className="fw-normal fs-xs ffBarlow text-white opacity-07"
                            >
                              Debt Funding
                            </a>
                          </li>
                          <li className="mt-2">
                            <a
                              href="#"
                              className="fw-normal fs-xs ffBarlow text-white opacity-07"
                            >
                              Club Investment
                            </a>
                          </li>
                          <li className="mt-2">
                            <a
                              href="#"
                              className="fw-normal fs-xs ffBarlow text-white opacity-07"
                            >
                              Player Pathway
                            </a>
                          </li>
                          <li className="mt-2">
                            <a
                              href="#"
                              className="fw-normal fs-xs ffBarlow text-white opacity-07"
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
                              className="fw-normal fs-xs ffBarlow text-white opacity-07"
                            >
                              About
                            </a>
                          </li>
                          <li className="mt-2">
                            <a
                              href="#"
                              className="fw-normal fs-xs ffBarlow text-white opacity-07"
                            >
                              FAQ
                            </a>
                          </li>
                          <li className="mt-2">
                            <a
                              href="#"
                              className="fw-normal fs-xs ffBarlow text-white opacity-07"
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
                              className="fw-normal fs-xs ffBarlow text-white opacity-07"
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

export default MyFooter;
