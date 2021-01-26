import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

const Navibar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mb-3">
      <LinkContainer to="/">
        <Navbar.Brand>AlexooO</Navbar.Brand>
      </LinkContainer>

      <Nav className="ml-auto ">
        <SignedOut />
        <SignedIn />
      </Nav>
    </Navbar>
  );
};

export default Navibar;
