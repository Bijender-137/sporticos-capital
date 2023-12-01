import React, { useState } from "react";
import { accordionItems } from "./common/Helper";
import { Container } from "react-bootstrap";
import { NegativeIcon, PlusIcon } from "./common/Icons";

const FaqAccrodion = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Initialize with 0 to make the first item active

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Container className="py-5 mb-3 mb-md-1 my-lg-2">
        <div className="faq-box mx-auto pb-md-4 py-lg-5">
          <h3 className="fs-xxl fw-semibold ff-fontspring text-center text-black mb-md-3 pb-lg-4 mb-0">
            Frequently Asked Questions
          </h3>
          {accordionItems.map((data, index) => (
            <div className="pt-3" key={index}>
              <div
                className={`accordion transition_300 p-2 py-3 p-sm-3 p-md-4 w-100 ${index === activeIndex ? "active transition_300" : ""
                  }`}
              >
                <div
                  className="cursor_pointer d-flex justify-content-between align-items-center"
                  onClick={() => handleItemClick(index)}
                >
                  <p className="mb-0 text-black ff-barlow fw-semibold fs-base pe-1">
                    {data.title}
                  </p>
                  <span className="accordion-toggle transition_300">
                    {index === activeIndex ? <NegativeIcon /> : <PlusIcon />}
                  </span>
                </div>
                <div
                  className={`accordion-content overflow-hidden transition_300 ${index === activeIndex ? "open" : ""
                    }`}
                >
                  <p className="mb-0 ff-barlow fs-sm fw-normal text-black opacity-08">
                    {data.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default FaqAccrodion;
