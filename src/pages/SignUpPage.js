import React, { useState, useRef, useEffect } from "react";
import { Form, Button, Card, Alert, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import { useAuthContext } from "../components/AuthContext/AuthProvider";

const SingUpPage = () => {
  const history = useHistory();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signUp, currentUser } = useAuthContext();

  const submitFormHandler = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("password do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(
        emailRef.current.value,
        passwordRef.current.value,
        firstNameRef.current.value,
        lastNameRef.current.value
      );
      history.push("/");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, [loading]);
  if (currentUser) return <Redirect to="/" />;
  return (
    <Container className="d-flex justify-content-center align-items-center flex-column">
      <Card className="w-100 mt-4" style={{ maxWidth: "400px" }}>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <h2 className="text-center mb-2">Sign up</h2>
          <Form onSubmit={submitFormHandler}>
            <Form.Group id="email">
              <Form.Label> First Name</Form.Label>
              <Form.Control
                type="text"
                ref={firstNameRef}
                required
                placeholder="enter first name"
              />
            </Form.Group>
            <Form.Group id="text">
              <Form.Label> Last name</Form.Label>
              <Form.Control
                type="text"
                ref={lastNameRef}
                required
                placeholder="enter last name"
              />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label> Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                placeholder="enter email"
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label> Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                required
                placeholder="enter password"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label> Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="confirm password"
                required
              />
            </Form.Group>
            <Button className="w-100" type="submit" disabled={loading}>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 pb-4">
        Have an account already?{" "}
        <LinkContainer to="/signin">
          <Nav.Link>Sign In</Nav.Link>
        </LinkContainer>
      </div>
    </Container>
  );
};

export default SingUpPage;
