import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FooterLogo from "../../assets/images/webp/footer_logo.webp";
import { Instagram, Linkdin, Twitter } from "../common/Icons";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const [footerPaddingActive, setFooterPaddingActive] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setFooterPaddingActive(location.pathname === '/' || location.pathname === '/about-us' || location.pathname === '/faq');
    setShow(location.pathname === '/');
  }, [location.pathname]);

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className={`footer-bg-img ${footerPaddingActive ? 'footer-padding-active' : ''}`}>
        <div className="py-5">
          <div className="py-sm-4">
            <Container className={`pb-md-4 pb-lg-5 mb-sm-3 ${show ? 'homepaddingtop' : ''}`}>
              <Row className="justify-content-between">
                <Col lg={5}>
                  <div>
                    <img
                      loading="lazy"
                      onClick={handleLogoClick}
                      width={237}
                      height={47}
                      className="footer-logo-w cursor_pointer w-100"
                      src={FooterLogo}
                      alt="FooterLogo"
                    />
                    <p className="text-white opacity-07 max-w-453 fs-sm fw-normal ff-barlow mt-3">
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
                        href="https://www.twitter.com/SporticosCapital"
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
                  <div className="d-flex justify-content-between pe-20 pe-sm-0 justify-content-lg-end footer-space">
                    <ul className="mb-0 p-0">
                      <li className="text-white fs-md fw-normal ff-fontspring">
                        Home
                      </li>
                      <li className="mt-3">
                        <Link to="/about-us" className="fw-normal fs-sm ff-barlow text-white opacity-07 navlink"> About Us</Link>
                      </li>
                      <li className="mt-2">
                        <Link to="/wealth-management" className="fw-normal fs-sm ff-barlow text-white opacity-07 navlink"> Wealth Management</Link>
                      </li>
                      <li className="mt-2">
                        <Link to="/debt-funding" className="fw-normal fs-sm ff-barlow text-white opacity-07 navlink">Debt Funding</Link>
                      </li>
                      <li className="mt-2">
                        <Link to="/club-investments" className="fw-normal fs-sm ff-barlow text-white opacity-07 navlink">Club Investment</Link>
                      </li>
                      <li className="mt-2">
                        <Link to="/player-pathwa" className="fw-normal fs-sm ff-barlow text-white opacity-07 navlink">Player Pathway</Link>
                      </li>
                      <li className="mt-2">
                        <Link to="/e-mentoring" className="fw-normal fs-sm ff-barlow text-white opacity-07 navlink">E-Mentoring</Link>
                      </li>
                    </ul>
                    <div className="d-flex flex-column">
                      <ul className="mb-0 p-0">
                        <li className="text-white fs-md fw-normal ff-fontspring">
                          About
                        </li>
                        <li className="mt-3">
                          <Link to="/" className="fw-normal fs-sm ff-barlow text-white opacity-07 navlink">About</Link>
                        </li>
                        <li className="mt-2">
                          <Link to="/faq" className="fw-normal fs-sm ff-barlow text-white opacity-07 navlink">FAQ</Link>
                        </li>
                        <li className="mt-2">
                          <Link to="/contact" className="fw-normal fs-sm ff-barlow text-white opacity-07 navlink">Contact us</Link>
                        </li>
                      </ul>
                      <ul className="mb-0 p-0 pt-4 pt-sm-0 d-sm-none">
                        <li className="text-white fs-md  fw-normal ff-fontspring">
                          Legal
                        </li>
                        <li className="mt-3">
                          <Link to="/" className="fw-normal fs-sm ff-barlow text-white opacity-07 navlink">Terms & Conditions</Link>
                        </li>
                        <li className="mt-2">
                          <Link to="/" className="fw-normal fs-sm ff-barlow text-white opacity-07 navlink">Privacy Policy</Link>
                        </li>
                      </ul>
                    </div>
                    <ul className="mb-0 p-0 d-none d-sm-block">
                      <li className="text-white fs-md  fw-normal ff-fontspring">
                        Legal
                      </li>
                      <li className="mt-3">
                        <Link to="/" className="fw-normal fs-sm ff-barlow text-white opacity-07 navlink">Terms & Conditions</Link>
                      </li>
                      <li className="mt-2">
                        <Link to="/" className="fw-normal fs-sm ff-barlow text-white opacity-07 navlink">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <p className="bg-yellow ff-barlow fw-normal mb-0 fs-xs text-black text-center py-3">
        ©Copyright Sporticos-Capital. | All Rights Reserved.
      </p>

    </>
  );
};

export default Footer;
