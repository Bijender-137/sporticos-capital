import React from "react";               
import preloaderimg from "../../assets/images/webp/page-logo.webp";               
export const Preloader = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
  }, 3000);

  return (
    <div
      id="none"
      className="min-vh-100 w-100 position-fixed top-0 start-0 loading"
    >
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="z-10 d-inline-block">
          <img src={preloaderimg} alt="preloaderimg" className="preloader_img" />
        </div>
      </div>
    </div>
  );
};
