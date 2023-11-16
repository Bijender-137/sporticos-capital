import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { MenuIcons } from "./common/Icons";
import mainLogo from "../assets/images/webp/main-logo.webp";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="bg-yellow">
        <Container>
          <div className={`${show ? "left_true" : "left_300"} navbars bg-white`}>
            <ul className='p-4 mb-0'>
              <li>home</li>
              <li className='py-5'>About</li>
              <li>Services</li>
              <button
                onClick={() => setShow(false)}
                className="btn btn-danger px-4 mt-5 py-2">
                close
              </button>
            </ul>
          </div>
          <div className="d-flex justify-content-between align-items-center py-3">
            <img loading="lazy" width={261} height={49} src={mainLogo} alt="mainlogo-page" />
            <div onClick={() => setShow(true)} className="cursor_pointer">
              <MenuIcons />
            </div>
          </div>
        </Container>
      </nav>

    </>
  )
}

export default Header;
