import React from "react";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <Container className="mx-auto">
      <div className="w-75 mx-auto d-flex align-items-center p-2 bg-grey">
        <div className="bg-danger text-white px-4 p-2">Latest</div>
        <Marquee>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as....
        </Marquee>
      </div>
    </Container>
  );
};

export default Marque;
