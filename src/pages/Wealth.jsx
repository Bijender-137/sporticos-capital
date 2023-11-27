import React from "react";
import CommonCards from "../components/common/CommonCards";
import Nextlevel from "../components/Nextlevel";
import FormSubmission from "../components/FormSubmission";

const Wealth = () => {
  return (
    <>
      <CommonCards />
      <Nextlevel />
      <div className="pt-xl-5 mt-lg-3">
        <FormSubmission />
      </div>
    </>
  );
};

export default Wealth;
