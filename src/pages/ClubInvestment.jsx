import React from "react";
import Captical from "../components/Captical";
import CommonFrom from "../components/common/CommonFrom";
import CommonCards from "../components/common/CommonCards";

const ClubInvestment = () => {
  return (
    <>
      <div className="position-relative dotted_background_image">
        <CommonCards />
        <Captical />
        <CommonFrom />
      </div>
    </>
  );
};

export default ClubInvestment;
