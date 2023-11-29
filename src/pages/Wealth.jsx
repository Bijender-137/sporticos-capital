import React from "react";
import CommonCards from "../components/common/CommonCards";
import CommonBorderCards from "../components/common/CommonBorderCards";
import CommonFrom from "../components/common/CommonFrom";

const Wealth = () => {
  return (
    <>
      <CommonCards />
      <CommonBorderCards />
      <div className="pt-xl-5 mt-lg-3">
        <CommonFrom />
      </div>
    </>
  );
};

export default Wealth;
