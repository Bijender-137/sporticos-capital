import React from "react";
import FormSubmission from "../components/FormSubmission";
import CommonCards from "../components/common/CommonCards";
import Nextlevel from "../components/Nextlevel";

const Playerpathwa = () => {
  return (
    <>
      <div className="position-relative backgroundImg">
        <CommonCards />
        <Nextlevel />
        <FormSubmission />
      </div>
    </>
  );
};

export default Playerpathwa;
