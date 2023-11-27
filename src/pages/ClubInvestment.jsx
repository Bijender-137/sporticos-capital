import React from "react";
import CommonCards from "../components/common/CommonCards";
import FormSubmission from "../components/FormSubmission";
import Captical from "../components/Captical";

const ClubInvestment = () => {
  return (
    <>
      <div className="position-relative backgroundImg">
        <CommonCards />
        <Captical />
        <FormSubmission />
      </div>
    </>
  );
};

export default ClubInvestment;
