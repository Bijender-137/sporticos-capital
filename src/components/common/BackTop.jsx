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
        <div className="z_index_10 position-relative">
          <button
            height={50}
            onClick={() => onTop()}
            className={
              first
                ? "d-none end-0 bottom-0 me-md-4 me-2 mb-md-4 mb-3 transform_rotate bg-transparent position-fixed bactotopHover"
                : "d-block end-0 bottom-0 me-md-4 me-2 mb-md-4 mb-3 transform_rotate bg-transparent position-fixed bactotopHover"
            }
          >
            <BacktoTopIcon />
          </button>
        </div>
      </Container>
    </>
  );
};
