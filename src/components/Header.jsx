import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { CrossIcons, MenuIcons } from "./common/Icons";
import mainLogo from "../assets/images/webp/main-logo.webp";
import { Link } from "react-router-dom";
import Hero from "./Hero";

const Header = () => {
  const [show, setShow] = useState(false);
  if (show === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <nav className="d-flex flex-column min-vh-100 bg-hero-img">
        <div className="bg-yellow position-relative z-2">
          <Container>
            <div className={`${show ? "nav-show " : "nav-fix"} sideNavbar bg-white`}>
              <div className="p-4 d-flex flex-column position-relative align-items-start">
                <div onClick={() => setShow(false)} className="position-absolute crossIcon">
                  <CrossIcons />
                </div>
                <Link className="text-black mb-3 mb-md-4 ffBarlow fw-normal fs-xs opacity-07 navlink" onClick={() => setShow(false)}>Club Investments</Link>
                <Link className="text-black mb-3 mb-md-4 ffBarlow fw-normal fs-xs opacity-07 navlink" onClick={() => setShow(false)}>Academy Partnerships</Link>
                <Link className="text-black mb-3 mb-md-4 ffBarlow fw-normal fs-xs opacity-07 navlink" onClick={() => setShow(false)}>Scouting and Trials</Link>
                <Link className="text-black mb-3 mb-md-4 ffBarlow fw-normal fs-xs opacity-07 navlink" onClick={() => setShow(false)}>E-Mentoring</Link>
                <Link className="text-black mb-3 mb-md-4 ffBarlow fw-normal fs-xs opacity-07 navlink" onClick={() => setShow(false)}>Venture Capital</Link>
                <Link className="text-black mb-3 mb-md-4 ffBarlow fw-normal fs-xs opacity-07 navlink" onClick={() => setShow(false)}>CSR</Link>
                <Link className="text-black mb-3 mb-md-4 ffBarlow fw-normal fs-xs opacity-07 navlink" onClick={() => setShow(false)}>About</Link>
                <button className="px-3 py-2 fw-semibold text-uppercase rounded-1 text-black fs-xs bg-yellow navLink-button ffBarlow mb-3 mb-md-4" type="button" onClick={() => setShow(false)}>contant Us</button>
                <button className="px-4 py-2 fw-semibold text-uppercase rounded-1 text-black fs-xs bg-yellow navLink-button ffBarlow" type="button" onClick={() => setShow(false)}>set an appointment</button>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-3">
              <img loading="lazy" src={mainLogo} alt="mainlogo-page" className="mainLogo" />
              <div onClick={() => setShow(true)} className="cursor_pointer">
                <MenuIcons />
              </div>
            </div>
          </Container>
        </div>
        <div className=" flex-grow-1 d-flex align-items-lg-center position-relative z-1">
          <Container>
            <Hero />
          </Container>
        </div>
      </nav>

    </>
  )
}

export default Header;
