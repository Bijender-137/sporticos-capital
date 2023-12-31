import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { CrossIcons, MenuIcons } from "../common/Icons";
import pagelogo from "../../assets/images/webp/page-logo.webp";
import { Link, useLocation } from "react-router-dom";
import { heroBackground, navLinks } from "./Helper";
import CommonHero from "./CommonHero";

const Header = () => {
  const [show, setShow] = useState(false);

  if (show === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  const location = useLocation();
  const currentPathname = location.pathname;
  const data = heroBackground.find((e) => e.path === currentPathname);

  const handleMenuClick = (e) => {
    e.stopPropagation(); // Prevent window click event from closing the menu
    setShow(!show);
  };

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div
        className={`d-flex flex-column min-vh-100 overflow-hidden bg_img_property ${data.backgroundImage}`}
        onClick={() => setShow(false)}
      >
        <nav className="bg-yellow position-fixed top-0 w-100 z-100">
          {show ? (
            <div className="bg-black opacity-25 z-3 position-absolute top-0 start-0 w-100 h-100 min-vh-100"></div>
          ) : (
            ""
          )}
          <Container>
            <div
              className={`${show ? "nav-show transition_300 position-fixed overflow-hidden end-0" : "nav-fix transition_300 position-fixed overflow-hidden"
                } side-nav-bar min-vh-100 position-fixed transition_300 bg-white z-4`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-3 ps-sm-4 d-flex flex-column position-relative align-items-start">
                <div
                  onClick={() => setShow(false)}
                  className="position-absolute cross-icon"
                >
                  <CrossIcons />
                </div>
                {navLinks.map((navlink, index) => {
                  return (
                    <div key={index} className="mb-3 mb-md-4">
                      <Link
                        onClick={() => setShow(false)}
                        className={`text-black ff-barlow fw-normal fs-sm ${location.pathname === navlink.path ? "" : "opacity-07"
                          } navlink`}
                        to={navlink.path}
                      >
                        {navlink.navLink}
                      </Link>
                    </div>
                  );
                })}
                <Link
                  to="/contact"
                  className="navslidbar-button border-radius-6 transition_300 mb-3 mb-md-4 px-3 px-sm-4 fw-normal text-uppercase text-black fs-sm bg-yellow ff-barlow"
                  onClick={() => setShow(false)}
                >
                  contant Us
                </Link>
                <Link
                  to="/contact"
                  className="navslidbar-button  border-radius-6transition_300 px-3 px-sm-4 fw-normal text-uppercase text-black fs-sm bg-yellow ff-barlow"
                  onClick={() => setShow(false)}
                >
                  set an appointment
                </Link>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-3">
              <Link to="/">
                <img
                  onClick={handleLogoClick}
                  loading="lazy"
                  src={pagelogo}
                  alt="pagelogo-page"
                  className="page-logo-image"
                />
              </Link>
              <div onClick={handleMenuClick} className="cursor_pointer">
                <MenuIcons />
              </div>
            </div>
          </Container>
        </nav>
        <div className="flex-grow-1 h-100 d-flex flex-column justify-content-around flex-md-row align-items-md-center position-relative z-1 common_navbar">
          <CommonHero />
        </div>
      </div>
    </>
  );
};

export default Header;
