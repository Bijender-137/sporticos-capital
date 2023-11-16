import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FooterLogo from "../assets/images/svg/footer_logo.svg";
const MyFooter = () => {
  return (
    <>
      <div className="pt-5 mt-4">
        <div className="footer-bg-img mt-5">
          <Container>
            <Row className="py-5 mt-4">
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
                  <p className="text-white">
                    Sporticos Capital is a registered LLC with offices in
                    Bahrain, US and the UK. Our combined experience and diverse
                    team gives us an important vantage point to understand the
                    sports industry's evolving investment landscape.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default MyFooter;
