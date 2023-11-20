import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { DropDown } from "./common/Icons";
import { formsubmit } from "./common/Helper";
import { useLocation } from "react-router-dom";

const FormSubmission = () => {
  // form submission js
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

  // dropdown js
  const [open, setOpen] = useState(false);
  const buttonClick = () => {
    setOpen(!open);
    // console.log(setOpen(!open));
  };
  const [option, setOption] = useState("Which best describes you?");
  const data = ["Which best describes you?", "option 2", "option 3"];
  const optionClick = (i) => {
    setOption(i);
    setOpen(false);
  };
  const location = useLocation();
  return (
    <>
      <div className="bg-white py-5">
        <Container className="py-lg-5 my-md-4">
          <div className="pb-sm-3">
            {formsubmit.map((formfunction) => {
              const fromheadingchange =
                formfunction.id === formfunction.id && location.pathname === formfunction.pathName;
              return fromheadingchange ? (
                <div key={formfunction.id}>
                  <p className="ff-fontspring fw-normal fs-xl lh-42 text-center mb-0 max-w-810 m-auto">
                    {formfunction.heading}
                  </p>
                  <p className="ffBarlow opacity-07 fw-normal fs-base text-black text-center mb-0 pt-1 m-auto">
                    {formfunction.para}
                  </p>
                </div>
              ) : null;
            })}
          </div>
          <div className="form-box-shadow py-4 py-lg-5 mt-lg-4 mx-auto w-100">
            <form
              className="d-flex flex-column px-3 px-md-5"
              onSubmit={Formsubmit}
            >
              <input
                className="w-100 input-padding input-border ffBarlow fw-medium fs-sm clr-gray"
                required
                type="email"
                placeholder="Email"
                name="Email"
                id="userEmail"
                onChange={Changing}
                value={myData.Email}
              />
              <div className="pt-2 mt-1">
                <input
                  className="w-100 input-padding input-border ffBarlow fw-medium fs-sm clr-gray"
                  required
                  type="text"
                  placeholder="Name"
                  name="Name"
                  id="memberName"
                  onChange={Changing}
                  value={myData.Name}
                />
              </div>
              <div className="pt-2 mt-1">
                <input
                  className="w-100 input-padding input-border ffBarlow fw-medium fs-sm clr-gray"
                  required
                  type="text"
                  placeholder="Subject"
                  name="Subject"
                  id="subject"
                  onChange={Changing}
                  value={myData.Password}
                />
              </div>
              <div className="pt-2 mt-1">
                <input
                  className="w-100 input-padding input-border ffBarlow fw-medium fs-sm clr-gray"
                  required
                  type="text"
                  placeholder="Set an Appointment"
                  name="Set an Appointment"
                  id="Appointment"
                  onChange={Changing}
                  value={myData.Password}
                />
              </div>
              <div className="pt-2 mt-1">
                <div className="position-relative">
                  <button
                    onClick={buttonClick}
                    className="w-100 input-padding input-border ffBarlow fw-medium fs-sm clr-gray text-start d-flex justify-content-between pe-2 me-1"
                  >
                    {option}
                    <span
                      className={`${open ? "dropdown-open" : "dropdown-closed"
                        }`}
                    >
                      <DropDown />
                    </span>
                  </button>
                  <div className="position-absolute w-100">
                    {open && (
                      <ul className="p-0">
                        {data.map((i, index) => (
                          <li
                            className="bg-gray w-100 input-padding input-border ffBarlow fw-medium fs-sm clr-gray text-start cursor_pointer"
                            key={index}
                            onClick={() => optionClick(i)}
                          >
                            {i}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              <div className="pt-2 mt-1">
                <textarea
                  required
                  className="w-100 input-padding input-border ffBarlow fw-medium fs-sm clr-gray textarea-resize"
                  cols="0"
                  rows="5"
                  id="message"
                  name="message"
                  placeholder="Describe your need:"
                ></textarea>
              </div>
              <div className="pt-3 mt-1 d-flex align-items-baseline">
                <input required type="checkbox" name="check" id="checked" />
                <label
                  htmlFor="checked"
                  className="ps-2 clr-gray fw-normal fs-sm"
                >
                  I agree to Sporticos-Capital
                  <a href="#" className="fw-semibold clr-blue mx-1">
                    Terms of Use
                  </a>
                  and
                  <a href="#" className="fw-semibold clr-blue mx-1">
                    Privacy Policy*
                  </a>
                </label>
              </div>
              <div className="mt-4 mt-md-5 pt-lg-3">
                <button
                  type="submit"
                  className="fw-normal text-uppercase fs-sm text-black bg-yellow ff-fontspring mt-1 navLink-button"
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
