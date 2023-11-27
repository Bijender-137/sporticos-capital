import React from "react";
import Nextlevel from "../components/Nextlevel";
import ContactUs from "../components/ContactUs";
import CommonTeam from "../components/common/CommonTeam";
import Location from "../components/Location";

const AboutUs = () => {
  return (
    <>
      <div className="position-relative backgroundImg">
        <Nextlevel />
        <Location />
        <CommonTeam />
        <ContactUs />
      </div>
    </>
  );
};

export default AboutUs;
