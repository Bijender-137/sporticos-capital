import React from "react";
import CommonTeam from "../components/common/CommonTeam";
import Performance from "../components/Performance";
import Slider from "../components/Slider";
import CommonContactUs from "../components/common/CommonContactUs";

const Home = () => {
  return (
    <>
      <div className="position-relative backgroundImg">
        <Slider />
        <Performance />
        <CommonTeam />
        <CommonContactUs />
      </div>
    </>
  );
};

export default Home;
