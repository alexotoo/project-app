import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const SignedOut = () => {
  return (
    <>
      <Nav.Item>
        <LinkContainer to="/">
          <Nav.Link>Sign Up</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/">
          <Nav.Link>Log In</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </>
  );
};

export default SignedOut;
