import React from "react";
import CommonCards from "../components/common/CommonCards";
import CommonBorderCards from "../components/common/CommonBorderCards";
import FormSubmission from "../components/FormSubmission";

const Ementoring = () => {
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

export default Ementoring;
