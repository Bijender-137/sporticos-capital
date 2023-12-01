import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { formdata, inputdata } from "./Helper";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { DropDown } from "./Icons";

const CommonFrom = () => {
  // heading--para***
  const locatio = useLocation();
  const paragraph = locatio.pathname;
  const currentheading = formdata.find((i) => i.path === paragraph);
  // form validation
  const form = inputdata.find((i) => i.path === paragraph);
  // name change
  const [name, setName] = useState("");
  const handleChangeName = (e) => {
    const result = e.target.value.replace(/[^a-z\s]/gi, "");
    setName(result);
  };
  // subject
  const [subject, setSubject] = useState("");
  const handleChangeSubject = (i) => {
    const result = i.target.value.replace(/[^a-z\s]/gi, "");
    setSubject(result);
  };
  // apointment
  const [apointment, setApointment] = useState("");
  const handleChangeApointment = (i) => {
    const result = i.target.value.replace(/[^a-z\s]/gi, "");
    setApointment(result);
  };
  // dropdown
  const [open, setOpen] = useState(false);
  const buttonClick = () => {
    setOpen(!open);
    // console.log(setOpen(!open));
  };
  const [option, setOption] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const data = ["option 1", "option 2"];
  const optionClick = (i) => {
    setOption(i);
    setSelectedOption(i);
    setOpen(false);
  };
  // email js
  const submit = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setSelectedOption(null);
    setOption("");
    setSubject("");
    setName("");
    setApointment("");
    emailjs.sendForm(
      "service_xhk3l5d",
      "template_xwxdo2t",
      submit.current,
      "PSK4KnVUln1hQ25H7"
    );
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Submitted it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Submitted!", "Your file has been submitted.", "Success");
      }
    });
    e.target.reset();
  };
  return (
    <>
      <div className="py-5 backgroundImg">
        <div className={`${currentheading.paddingStyle}`}></div>
        <Container className="py-lg-5 my-xl-4">
          <div className="text-center">
            <h2 className="fw-bold ff-fontspring fs-xxl text-black max-w-810  m-auto">
              {currentheading?.heading}
            </h2>
            {currentheading?.para && (
              <p
                style={{ maxWidth: currentheading.paramaxwidth }}
                className="ff-barlow fs-base text-black fw-normal mb-0 pt-1 opacity-07 m-auto"
              >
                {currentheading.para}
              </p>
            )}
          </div>
          <div className="pt-4">
            <div className="form-box-shadow py-4 py-lg-5 mx-auto w-100">
              <form
                className="d-flex flex-column px-3 px-md-5"
                ref={submit}
                onSubmit={sendEmail}
              >
                <div>
                  <input
                    className="w-100 input-padding input-border transition_300 text-black ff-barlow fw-medium fs-sm"
                    type="email"
                    id="useremail"
                    name="useremail"
                    required
                    placeholder={form?.email}
                  />
                </div>
                <div className="pt-2 mt-1">
                  <input
                    className="w-100 input-padding input-border transition_300 ff-barlow fw-medium fs-sm"
                    type="text"
                    id="name"
                    name="fname"
                    value={name}
                    onChange={handleChangeName}
                    required
                    placeholder={form?.name}
                  />
                </div>
                <div className="pt-2 mt-1">
                  <input
                    className="w-100 input-padding input-border transition_300 ff-barlow fw-medium fs-sm"
                    type="text"
                    id="subject"
                    name="fname"
                    value={subject}
                    onChange={handleChangeSubject}
                    required
                    placeholder={form?.subject}
                  />
                </div>
                <div className="pt-2 mt-1">
                  <input
                    className="w-100 input-padding input-border transition_300 ff-barlow fw-medium fs-sm"
                    type="text"
                    id="apointment"
                    name="fname"
                    value={apointment}
                    onChange={handleChangeApointment}
                    required
                    placeholder={form?.apointment}
                  />
                </div>
                <div className="pt-2 mt-1">
                  <div className="position-relative">
                    <div
                      onClick={buttonClick}
                      className={`w-100 cursor_pointer input-padding ff-barlow fw-medium fs-sm text-start d-flex justify-content-between pe-2 me-1 border-0 input-border transition_300 ${selectedOption ? "text-black" : "clr-gray"
                        }`}
                    >
                      {selectedOption || "Which best describes you?"}
                      <span
                        className={`${open ? "dropdown-open" : "dropdown-closed"
                          }`}
                      >
                        <DropDown />
                      </span>
                    </div>
                    <div className="position-absolute w-100">
                      {open && (
                        <ul className="p-0">
                          {data.map((i, index) => (
                            <li
                              className={`option transition_300 w-100 px-3 py-2 input-border transition_300 ff-barlow fw-medium fs-sm text-start cursor_pointer ${selectedOption === i ? "" : ""
                                }`}
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
                    className="w-100 text-black input-padding input-border transition_300 ff-barlow fw-medium fs-sm clr-gray textarea-resize"
                    cols="0"
                    rows="5"
                    id="message"
                    name="message"
                    placeholder="Describe your need:"
                  ></textarea>
                </div>
                <div className="pt-3 mt-1 d-flex align-items-sm-center">
                  <input
                    className="cursor_pointer mt-1 mt-sm-0"
                    required
                    type="checkbox"
                    name="check"
                    id="checked"
                  />
                  <label
                    htmlFor="checked"
                    className="ms-2 text-black opacity-07 ff-barlow fw-normal fs-sm"
                  >
                    I agree to Sporticos-Capital
                    <span>
                      {" "}<a
                        href="#"
                        className="fw-semibold clr-blue from-opacity transition_300"
                      >
                        Terms of Use
                      </a>
                    </span>
                    {" "}and{" "}
                    <span>
                      <a href="#"
                        className="fw-semibold clr-blue from-opacity transition_300">
                        Privacy Policy<span className="text-danger">*</span>
                      </a>
                    </span>
                  </label>
                </div>
                <div className="mt-4 mt-md-5 pt-lg-3">
                  <input
                    className="fw-normal text-uppercase fs-sm text-black bg-yellow ff-fontspring mt-1 navLink-button transition_300"
                    type="submit"
                    required
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CommonFrom;
