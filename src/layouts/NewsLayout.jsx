import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";

const NewsLayout = () => {
  return (
    <>
      <Header />
      <Container className="row mx-auto">
        <div className="col-9">
          <Outlet />
        </div>
        <div className="col-3">
          <RightSidebar />
        </div>
      </Container>
    </>
  );
};

export default NewsLayout;
