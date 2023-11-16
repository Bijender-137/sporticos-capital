import React, { useState } from "react";
const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={`${show ? "left_true" : "left_300"} navbars`}>
        <ul className='py-5 text-center text-center'>
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
      <button
        onClick={() => setShow(true)}
        className="btn btn-danger px-4 mt-5 py-2">
        Open
      </button>

     
    </>
  )
}

export default Header;
