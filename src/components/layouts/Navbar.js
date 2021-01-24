import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

const Navibar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mb-3">
      <Navbar.Brand href="#home">AlexooO</Navbar.Brand>
      <Nav className="ml-auto ">
        <SignedOut />
        <SignedIn />
      </Nav>
    </Navbar>
  );
};

export default Navibar;
