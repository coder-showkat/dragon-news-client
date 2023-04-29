import React from "react";
import bg from "../assets/bg.png";

const RightSidebarBanner = () => {
  return (
    <div
      className="text-center text-white p-4 mb-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h2 className="mb-4 mt-4 pt-2">
        Creating an <br />
        Amazing <br />
        Newspaper
      </h2>

      <p className="mb-4">
        Discover thousands of options, easy to customize layouts, one-click to
        import demo and much more.
      </p>

      <button className="p-4 bg-danger border-0 text-white h5">
        Learn More
      </button>
    </div>
  );
};

export default RightSidebarBanner;
