import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useAuthContext } from "../AuthContext/AuthProvider";

import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

const Navibar = () => {
  const { currentUser, firstN, lastN, initials } = useAuthContext();

  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, [currentUser]);
  console.log(currentUser);
  console.log(firstN, lastN, initials);

  return (
    <Navbar bg="dark" variant="dark" className="mb-3">
      <LinkContainer to="/">
        <Navbar.Brand>AlexooO</Navbar.Brand>
      </LinkContainer>

      <Nav className="ml-auto ">
        {(isSignedIn && <SignedIn />) || <SignedOut />}
      </Nav>
    </Navbar>
  );
};

export default Navibar;
