import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

import { auth } from "../config/fbconfig";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignIn = async (email, password) => {
    try {
      const signInUser = await auth.signInWithEmailAndPassword(email, password);

      const signedInUser = signInUser.user;
      console.log(signedInUser);
      return signedInUser;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    userSignIn(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <Container>
      <h5 className="text-center mb-5">Sign In</h5>
      <Row>
        <Col className="d-flex justify-content-center">
          {" "}
          <Form onSubmit={submitHandler}>
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
              Sign In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignInPage;
