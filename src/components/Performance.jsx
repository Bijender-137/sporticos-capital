import React from "react";
import PerformanceImg from "../assets/images/webp/performance_img.webp";
const Performance = () => {
  return (
    <>
      <div className="bg_clr_performance py-5">
        <div className="container pt-2 pb-lg-4 mt-xl-5">
          <div className="text-center">
            <h2 className="fs-xxl ff-fontspring fw-semibold text-black mb-0">
              Where Passion Meets Performance
            </h2>
            <p className="fs-base fw-normal text-black opacity-07 ffBarlow mb-0 pt-1">
              Through our multi-disciplinary approach, we preserve the unique
              culture of the clubs we <span className="d-lg-block"></span> work
              with, ensure engaged fan bases, and uphold sustainable practices.
            </p>
            <p className="fs-base fw-bold text-black opacity-07 ffBarlow mb-0 py-2 mt-1">
              Here’s what investors can expect:
            </p>
          </div>
          <div className="row mt-md-5 pt-4">
            <div className="col-lg-4">
              <div className="d-flex flex-column justify-content-between h-100">
                <p className="fs-lg ffBarlow fw-normal text-black opacity-07 performance_text_w mb-0 pt-xl-5">
                  Global exposure to the international football industry
                </p>
                <p className="fs-lg ffBarlow fw-normal text-black opacity-07 performance_text_w_320 mb-0 pt-3 pt-md-5 pt-xxl-0">
                  Founders with decades of combined private equity and sports
                  management expertise
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="performance_img_w py-4 py-md-5 py-lg-0 m-auto">
                <img className="w-100" src={PerformanceImg} alt="PerformanceImg" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex flex-column h-100 justify-content-between text-lg-end align-items-lg-end">
                <p className="fs-lg ffBarlow fw-normal text-black opacity-07 performance_text_270 mb-0 pt-xl-5">
                Equitable, ESG-oriented opportunities that include women’s football
                </p>
                <p className="fs-lg ffBarlow fw-normal text-black opacity-07 performance_text_w_320 mb-0 pt-3 pt-md-5 pt-xxl-0">
                Purposeful investments with strategic, growth-oriented partnerships
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Performance;
