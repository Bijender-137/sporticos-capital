import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { CrossIcons, MenuIcons } from "./common/Icons";
import mainLogo from "../assets/images/webp/main-logo.webp";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  if (show === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <nav className="d-flex flex-column min-vh-100">
        <div className="bg-yellow">
          <Container>
            <div className={`${show ? "nav-show " : "nav-fix"} sideNavbar bg-white`}>
              <div className="p-4 d-flex flex-column position-relative align-items-start">
                <div onClick={() => setShow(false)} className="position-absolute crossIcon">
                  <CrossIcons />
                </div>
                <Link className="text-black mb-4 ff-barlow fw-normal fs-xs opacity-07" onClick={() => setShow(false)}>Club Investments</Link>
                <Link className="text-black mb-4 ff-barlow fw-normal fs-xs opacity-07" onClick={() => setShow(false)}>Academy Partnerships</Link>
                <Link className="text-black mb-4 ff-barlow fw-normal fs-xs opacity-07" onClick={() => setShow(false)}>Scouting and Trials</Link>
                <Link className="text-black mb-4 ff-barlow fw-normal fs-xs opacity-07" onClick={() => setShow(false)}>E-Mentoring</Link>
                <Link className="text-black mb-4 ff-barlow fw-normal fs-xs opacity-07" onClick={() => setShow(false)}>Venture Capital</Link>
                <Link className="text-black mb-4 ff-barlow fw-normal fs-xs opacity-07" onClick={() => setShow(false)}>CSR</Link>
                <Link className="text-black ff-barlow fw-normal fs-xs opacity-07" onClick={() => setShow(false)}>About</Link>
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
        <div className=" flex-grow-1 d-flex align-items-center">
          <Container>
            <h1 className="fs-lg">Talk to The
              <span className="d-sm-block">
                Team
              </span></h1>
          </Container>
        </div>
      </nav>

    </>
  )
}

export default Header;
