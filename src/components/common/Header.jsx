import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { CrossIcons, MenuIcons } from "../common/Icons";
import mainLogo from "../../assets/images/webp/main-logo.webp";
import { Link } from "react-router-dom";
import Hero from "../Hero";
import { navLinks } from "./Helper";

const Header = () => {
  const [show, setShow] = useState(false);

  if (show === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  const handleMenuClick = (e) => {
    e.stopPropagation(); // Prevent window click event from closing the menu
    setShow(!show);
  };

  return (
    <>
      <div className="d-flex flex-column min-vh-100 bg-hero-img overflow-hidden" onClick={() => setShow(false)}>
        <nav className="bg-yellow position-relative z-2">
          {show ? (
            <div className="bg-yellow opacity-25 z-3 position-absolute top-0 start-0 w-100 h-100 min-vh-100"></div>) : ("")}
          <Container>
            <div className={`${show ? "nav-show " : "nav-fix"} sideNavbar bg-white z-4`} onClick={(e) => e.stopPropagation()}>
              <div className="p-3 ps-sm-4 d-flex flex-column position-relative align-items-start">
                <div onClick={() => setShow(false)} className="position-absolute crossIcon">
                  <CrossIcons />
                </div>
                {navLinks.map((navlink) => {
                  return (
                    <div key={navlink.id} className="mb-3 mb-md-4">
                      <Link onClick={() => setShow(false)}
                        className="text-black  ffBarlow fw-normal fs-sm opacity-07 navlink"
                        to={navlink.pathName}
                      >
                        {navlink.NavName}
                      </Link>

                    </div>
                  );
                })}
                <button className="heroBtn mb-3 mb-md-4 px-3 px-sm-4 fw-semibold text-uppercase text-black fs-sm bg-yellow navLink-button ff-fontspring" type="button" onClick={() => setShow(false)}>
                  contant Us
                </button>
                <button className="heroBtn px-3 px-sm-4 fw-semibold text-uppercase text-black fs-sm bg-yellow navLink-button ff-fontspring" type="button" onClick={() => setShow(false)}>
                  set an appointment
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-3">
              <a href="#" target="_"><img loading="lazy" src={mainLogo} alt="mainlogo-page" className="mainLogo" /></a>
              <div onClick={handleMenuClick} className="cursor_pointer">
                <MenuIcons />
              </div>
            </div>
          </Container>
        </nav>
        <div className=" flex-grow-1 d-flex align-items-lg-center position-relative z-1">
          <Container>
            <Hero />
          </Container>
        </div>
      </div>

    </>
  )
}

export default Header;
