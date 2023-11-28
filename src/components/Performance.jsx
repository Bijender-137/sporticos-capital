import React from "react";
import PerformanceImg from "../assets/images/webp/performance_img.webp";
import {
  DollarbulbIcon,
  FootballIcon,
  GrowIcon,
  GrowthIcon,
  HandspeopleIcon,
} from "./common/Icons";
const Performance = () => {
  return (
    <>
      <div className="bg_clr_performance py-5">
        <div className="container pt-2 pb-lg-4 mt-xl-5">
          <div className="text-center">
            <h5 className="fs-xxl ff-fontspring fw-semibold text-black mb-0">
              Where Passion Meets Performance
            </h5>
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
            <div className="col-md-4 pe-md-0">
              <div className="d-flex flex-column justify-content-md-between h-100">
                <div className="d-flex align-items-center">
                  <div className="d-md-none">
                    <FootballIcon />
                  </div>
                  <p className="fs-lg ffBarlow fw-normal text-black opacity-07 performance_text_w mb-0 ps-3 ps-md-0">
                    Global exposure to the international football industry
                  </p>
                </div>
                <div className="d-flex align-items-center mt-4 mt-md-0">
                  <div className="d-md-none">
                    <HandspeopleIcon />
                  </div>
                  <p className="fs-lg ffBarlow fw-normal text-black opacity-07 performance_text_w_320 mb-0 ps-3 ps-md-0">
                    Founders with decades of combined private equity and sports
                    management expertise
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-none d-md-block">
              <div className="performance_img_w m-auto">
                <img
                  className="w-100 performance_img_h"
                  src={PerformanceImg}
                  alt="PerformanceImg"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex flex-column h-100 justify-content-md-between text-md-end align-items-md-end">
                <div className="d-flex align-items-center mt-4 mt-md-0">
                  <div className="d-md-none">
                    <DollarbulbIcon />
                  </div>
                  <p className="fs-lg ffBarlow fw-normal text-black opacity-07 mb-0 ps-3 ps-md-0 performance_text_270">
                    Equitable, ESG-oriented opportunities that include women’s
                    football
                  </p>
                </div>
                <div className="d-flex align-items-center mt-4 mt-md-0">
                  <div className="d-md-none">
                    <GrowthIcon />
                  </div>
                  <p className="fs-lg ffBarlow fw-normal text-black opacity-07 performance_text_w_320 mb-0 ps-3 ps-md-0 ">
                    Purposeful investments with strategic, growth-oriented
                    partnerships
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Performance;
