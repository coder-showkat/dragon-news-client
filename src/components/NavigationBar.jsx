import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import avatar from "../assets/avatar.png";

const NavigationBar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const logoutHandler = async () => {
    const result = await logoutUser();
    if (!result.success) alert(result.message);
  };
  return (
    <Navbar className="my-2">
      <Container className="mx-auto position-relative">
        <Nav className="mx-auto gap-3">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">Career</Nav.Link>
        </Nav>
        <div className="position-absolute end-0">
          <button
            style={{ width: "42px", height: "42px" }}
            className="rounded-circle border-2 overflow-hidden me-2 p-0"
          >
            <img
              src={user?.photoURL ? user.photoURL : avatar}
              alt=""
              className="w-100"
            />
          </button>
          {user ? (
            <button
              onClick={logoutHandler}
              className="bg-dark text-white px-4 py-1"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="bg-dark text-white px-4 py-1">
              Login
            </Link>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
