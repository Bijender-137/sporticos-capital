import React from "react";
import CommonTeam from "../components/common/CommonTeam";
import Location from "../components/Location";
import CommonBorderCards from "../components/common/CommonBorderCards";
import CommonContactUs from "../components/common/CommonContactUs";

const AboutUs = () => {
  return (
    <>
      <div className="position-relative backgroundImg">
        <CommonBorderCards />
        <Location />
        <CommonTeam />
        <CommonContactUs />
      </div>
    </>
  );
};

export default AboutUs;
