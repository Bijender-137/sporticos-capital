import React, { useState } from "react";
import { Container } from "react-bootstrap";

const FormSubmission = () => {
  const [myData, setData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Appointment: "",
  });
  const Changing = (p) => {
    const Name = p.target.name;
    const value = p.target.value;

    setData({ ...myData, [Name]: value });
  };
  const Formsubmit = (x) => {
    x.preventDefault();
    setData({ Name: "", Email: "", Subject: "", Appointment: "" });
  };
  const [show, setShow] = useState(false);
  const toggleField = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="bg-white pt-5">
        <Container className="pt-3">
          <h2 className="ff-fontspring fw-normal fs-md lh-42 text-center pt-5 pb-3">
            Submit your Information and a Member of our
            <span className="d-md-block"></span> Team will Follow Up As Soon As
            Possible
          </h2>
          <div className="form-box-shadow py-5 mt-4">
            <form
              className="d-flex flex-column px-3 px-md-5"
              onSubmit={Formsubmit}
            >
              <div>
                <input
                  className="w-100 input-padding input-border ffBarlow fw-medium fs-xs clr-gray"
                  required
                  type="email"
                  placeholder="Email"
                  name="Email"
                  onChange={Changing}
                  value={myData.Email}
                />
              </div>
              <div className="pt-2 mt-1">
                <input
                  className="w-100 input-padding input-border ffBarlow fw-medium fs-xs clr-gray"
                  required
                  type="text"
                  placeholder="Name"
                  name="Name"
                  onChange={Changing}
                  value={myData.Name}
                />
              </div>
              <div className="pt-2 mt-1">
                <input
                  className="w-100 input-padding input-border ffBarlow fw-medium fs-xs clr-gray"
                  required
                  type="text"
                  placeholder="Subject"
                  name="Subject"
                  onChange={Changing}
                  value={myData.Password}
                />
              </div>
              <div className="pt-2 mt-1">
                <input
                  className="w-100 input-padding input-border ffBarlow fw-medium fs-xs clr-gray"
                  required
                  type="text"
                  placeholder="Set an Appointment"
                  name="Set an Appointment"
                  onChange={Changing}
                  value={myData.Password}
                />
              </div>

              <select
                className="w-100 input-padding input-border ffBarlow fw-medium fs-xs clr-gray mt-3"
                id="select"
              >
                <option value="option">I would like to speak about:</option>
                <option value="option">I would like to learn about:</option>
              </select>
              <div className="pt-2 mt-1">
                <textarea
                  required
                  className="w-100 input-padding input-border ffBarlow fw-medium fs-xs clr-gray textarea-resize"
                  cols="0"
                  rows="5"
                  placeholder="Describe your need:"
                ></textarea>
              </div>
              <form className="pt-3 mt-1" action="/action_page ">
                <input required type="checkbox" name="check" id="checked" />
                <label
                  for="checked"
                  className="ps-2 clr-gray fw-normal fs-xs"
                 
                >
                  I agree to Sporticos-Capital
                  <a href="" className="fw-semibold clr-blue mx-1">
                    Terms of Use
                  </a>
                  and
                  <a href="" className="fw-semibold clr-blue mx-1">
                    Privacy Policy*
                  </a>
                </label>
              </form>
              <div className="mt-4">
                <button
                  type="submit"
                  className="fw-normal text-uppercase fs-xs text-black bg-yellow summit-btn border-0 ff-fontspring"
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default FormSubmission;
