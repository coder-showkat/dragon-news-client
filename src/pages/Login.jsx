import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../components/Loading";

const Login = () => {
  const [error, setError] = useState(null);
  const { user, loading, loginUser } = useContext(AuthContext);

  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const result = await loginUser(email, password);
    if (!result.success) setError(result.message);
  };

  if (loading) return <Loading />;
  if (user) {
    if (location?.state?.pathname)
      return <Navigate to={location.state.pathname} replace={true} />;
    else return <Navigate to="/" replace={true} />;
  }
  return (
    <form onSubmit={handleLogin} className="w-50 mx-auto bg-white p-4 my-5">
      <h3 className="text-center fw-semibold mb-4 pb-4">Login your account</h3>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label className="fw-semibold">Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email address"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label className="fw-semibold">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          required
        />
      </Form.Group>
      {error && <p className="text-danger text-center py-2">{error}</p>}
      <Button variant="dark" type="submit" className="rounded-0 w-100 p-2">
        Login
      </Button>
      <p className="my-3 fw-semibold text-center text-darkgrey">
        Don't Have An Account?{" "}
        <Link to="/register" className="text-danger text-decoration-none">
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
