import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useMutation } from "react-query";

import { auth } from "../config/fbconfig";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation(() =>
    auth.signInWithEmailAndPassword(email, password)
  );

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const userRef = await mutation.mutateAsync(email, password);
      setEmail("");
      setPassword("");

      console.log(userRef);
      console.log(mutation);
    } catch (error) {
      console.error(error);
    }
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
