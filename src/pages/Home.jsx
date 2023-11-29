import React from "react";
import CommonTeam from "../components/common/CommonTeam";
import Performance from "../components/Performance";
import DrivingSlider from "../components/DrivingSlider";
import CommonContactUs from "../components/common/CommonContactUs";

const Home = () => {
  return (
    <>
      <div className="position-relative backgroundImg">
        <DrivingSlider />
        <Performance />
        <CommonTeam />
        <CommonContactUs />
      </div>
    </>
  );
};

export default Home;
