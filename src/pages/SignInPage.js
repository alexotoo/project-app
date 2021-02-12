import React, { useState, useRef } from "react";
import { Form, Button, Card, Alert, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../components/AuthContext/AuthProvider";

const SingInPage = () => {
  const history = useHistory();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const { signIn } = useAuthContext();

  const submitFormHandler = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signIn(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (error) {
      setError("failed to sign in");
    }
    setLoading(false);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center flex-column">
      <Card className="w-100 mt-4" style={{ maxWidth: "400px" }}>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <h2 className="text-center mb-2">Sign In</h2>
          <Form onSubmit={submitFormHandler}>
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

            <Button className="w-100" type="submit" disabled={loading}>
              Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 pb-4">
        Create an account{" "}
        <LinkContainer to="/signup">
          <Nav.Link>Sign Up</Nav.Link>
        </LinkContainer>
      </div>
    </Container>
  );
};

export default SingInPage;
