import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const AuthLayout = () => {
  return (
    <div>
      <Container className="mx-auto">
        <NavigationBar />
      </Container>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
