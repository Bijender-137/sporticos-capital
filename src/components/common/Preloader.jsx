import React from "react";
export const Preloader = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
  }, 4000);

  return (
    <div
      id="none"
      className="min-vh-100 w-100 position-fixed top-0 start-0 loading"
    >
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="z-10 d-inline-block">
          <h1 className="cozy_text_shadow fw-normal fs_8xl clr_orange ff_bomb line_h_103 mb-0 heroHeading2 headingSame py-5">
            <span className="clr_orange"> Sporticose</span>
            <span className=" clr_green ff_soda cozy_text_shadow ms-2">
              Capital
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};
