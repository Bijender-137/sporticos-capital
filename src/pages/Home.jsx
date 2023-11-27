import React from "react";
import ContactUs from "../components/ContactUs";
import CommonTeam from "../components/common/CommonTeam";
import Performance from "../components/Performance";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <Performance />
      <CommonTeam />
      <ContactUs />
    </>
  );
};

export default Home;
