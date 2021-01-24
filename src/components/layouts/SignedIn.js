import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const SignedIn = () => {
  return (
    <>
      <Nav.Item>
        <LinkContainer to="/">
          <Nav.Link>New Project</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/">
          <Nav.Link>Log Out</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/">
          <Nav.Link className="badge  rounded-circle bg-primary py-2 mt-2 mx-3 ">
            AO
          </Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </>
  );
};

export default SignedIn;
