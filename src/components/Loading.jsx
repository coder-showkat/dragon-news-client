import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Spinner />
    </div>
  );
};

export default Loading;
