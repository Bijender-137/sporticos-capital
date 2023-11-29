import React from "react";
import ContactUs from "../components/ContactUs";
import CommonTeam from "../components/common/CommonTeam";
import Location from "../components/Location";
import CommonBorderCards from "../components/common/CommonBorderCards";

const AboutUs = () => {
  return (
    <>
      <div className="position-relative backgroundImg">
        <CommonBorderCards />
        <Location />
        <CommonTeam />
        <ContactUs />
      </div>
    </>
  );
};

export default AboutUs;
