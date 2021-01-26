import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const SingInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log({ email, password, firstName, lastName });
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <Container>
      <h5 className="text-center mb-5">Sign Up</h5>
      <Row>
        <Col className="d-flex justify-content-center">
          {" "}
          <Form onSubmit={submitFormHandler}>
            <Form.Group controlId="firstName">
              <Form.Label className="text-start">First Name</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                placeholder="Enter first name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label className="text-start">Last Name</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                placeholder="Enter Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-start">Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SingInPage;
