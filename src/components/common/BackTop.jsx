import React from "react";
import { Container } from "react-bootstrap";
import { BacktoTopIcon } from "./Icons";
export const BackTop = () => {
  const [first, setfirst] = React.useState(true);
  const onTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 150) {
      setfirst(false);
    } else {
      setfirst(true);
    }
  });
  return (
    <>
      <Container className="container">
        <div className="z-100 position-relative">
          <button
            onClick={() => onTop()}
            className={
              first
                ? "d-none end-0 bottom-0 me-md-4 me-2 mb-md-4 mb-sm-2 back_to_top_spacing border-0 position-fixed back_to_top"
                : "d-block end-0 bottom-0 me-md-4 me-2 mb-md-4 mb-sm-2 back_to_top_spacing border-0 position-fixed back_to_top"
            }
          >
            <BacktoTopIcon />
          </button>
        </div>
      </Container>
    </>
  );
};
