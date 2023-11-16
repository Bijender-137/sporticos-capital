import React, { useState } from "react";
import { Container } from "react-bootstrap";

const FormSubmission = () => {
  const [myData, setData] = useState({ Name: "", Email: "", Password: "" });
  const Changing = (p) => {
    const Name = p.target.name;
    const value = p.target.value;

    setData({ ...myData, [Name]: value });
  };
  const Formsubmit = (x) => {
    x.preventDefault();
    setData({ Name: "", Email: "", Password: "" });
  };
  const [show, setShow] = useState(false);
  const toggleField = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="bg-white pt-5">
        <Container className="pt-3">
          <h2 className="ff-fontspring fw-normal fs-md lh-42 text-center pt-5">
            Submit your Information and a Member of our
            <span className="d-md-block"></span> Team will Follow Up As Soon As
            Possible
          </h2>
          <div className="form-box-shadow">
            <form className="d-flex flex-column" onSubmit={Formsubmit}>
              <div className="px-5">
                <input
                  className="w-100 input-padding "
                  required
                  type="text"
                  placeholder="Name"
                  name="Name"
                  onChange={Changing}
                  value={myData.Name}
                />
              </div>
              <div className="mt-4">
                <input
                  required
                  type="email"
                  placeholder="Email"
                  name="Email"
                  onChange={Changing}
                  value={myData.Email}
                />
              </div>
              <div className="mt-4">
                <input
                  required
                  type={show === false ? "password" : "text"}
                  placeholder="Password"
                  name="Password"
                  onChange={Changing}
                  value={myData.Password}
                />
                <span className="ms-2" onClick={toggleField}>
                  show
                </span>
              </div>
              <div className="mt-4">
                <button type="submit">submit</button>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default FormSubmission;
