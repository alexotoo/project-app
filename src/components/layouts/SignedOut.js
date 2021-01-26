import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const SignedOut = () => {
  return (
    <>
      <Nav.Item>
        <LinkContainer to="/signup">
          <Nav.Link>Sign Up</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/signin">
          <Nav.Link>Log In</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </>
  );
};

export default SignedOut;
