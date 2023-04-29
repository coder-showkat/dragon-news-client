import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import Marque from "../components/Marque";
import NavigationBar from "../components/NavigationBar";
import RightSidebar from "../components/RightSidebar";
import RightSidebarBanner from "../components/RightSidebarBanner";

const Main = () => {
  return (
    <>
      <Header />
      <Marque />
      <NavigationBar />
      <Container className="row mx-auto">
        <div className="col-3">
          <LeftSidebar />
        </div>
        <div className="col-6">
          <Outlet />
        </div>
        <div className="col-3">
          <RightSidebar />
          <RightSidebarBanner />
        </div>
      </Container>
    </>
  );
};

export default Main;
