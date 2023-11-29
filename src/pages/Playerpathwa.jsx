import React from "react";
import FormSubmission from "../components/FormSubmission";
import CommonCards from "../components/common/CommonCards";
import CommonBorderCards from "../components/common/CommonBorderCards";

const Playerpathwa = () => {
  return (
    <>
      <div className="position-relative backgroundImg">
        <CommonCards />
        <CommonBorderCards />
        <FormSubmission />
      </div>
    </>
  );
};

export default Playerpathwa;
