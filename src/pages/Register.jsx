import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../components/Loading";

const Register = () => {
  const { user, loading, createUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [checked, setChecked] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    const form = e.target;
    console.log(form.name.value);
    const name = form.name.value;
    const photoURL = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      if (name.length < 3)
        throw new Error("Name should be minimum 3 characters");
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false)
        throw new Error("Please input valid email");
      if (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password) ===
        false
      )
        throw new Error(
          "Password should be minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
        );
      const result = await createUser(name, photoURL, email, password);

      if (!result.success) setError(result.message);
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <Loading />;

  if (user) return <Navigate to="/" replace={true} />;

  return (
    <form onSubmit={handleRegister} className="w-50 mx-auto bg-white p-4 my-5">
      <h3 className="text-center fw-semibold mb-4 pb-4">
        Register your account
      </h3>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label className="fw-semibold">Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="photoUrl">
        <Form.Label className="fw-semibold">Photo URL</Form.Label>
        <Form.Control type="text" placeholder="Enter your photo URL" required />
      </Form.Group>

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
      <Form.Group
        onClick={(e) =>
          e.target.checked ? setChecked(true) : setChecked(false)
        }
        className="mb-3"
        controlId="checkbox"
      >
        <div className="d-flex gap-2">
          <Form.Check type="checkbox" label="Accept" />
          <Link className="text-decoration-none fw-semibold text-dark">
            Terms & Conditions
          </Link>
        </div>
      </Form.Group>
      {error && <p className="text-danger py-2 text-center">{error}</p>}
      <Button
        disabled={!checked}
        variant="dark"
        type="submit"
        className="rounded-0 w-100 p-2"
      >
        Register
      </Button>
      <p className="my-3 fw-semibold text-center text-darkgrey">
        Already Have An Account?{" "}
        <Link to="/login" className="text-danger text-decoration-none">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
