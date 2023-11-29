import React from "react";
import CommonCards from "../components/common/CommonCards";
import CommonBorderCards from "../components/common/CommonBorderCards";
import FormSubmission from "../components/FormSubmission";

const Wealth = () => {
  return (
    <>
      <CommonCards />
      <CommonBorderCards />
      <div className="pt-xl-5 mt-lg-3">
        <FormSubmission />
      </div>
    </>
  );
};

export default Wealth;
