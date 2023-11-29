import React from "react";
import ContactUs from "../components/ContactUs";
import CommonTeam from "../components/common/CommonTeam";
import Performance from "../components/Performance";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <div className="position-relative backgroundImg">
        <Slider />
        <Performance />
        <CommonTeam />
        <ContactUs />
      </div>
    </>
  );
};

export default Home;
