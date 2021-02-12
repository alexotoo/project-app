import React, { useState } from "react";
import { Nav, Button } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../AuthContext/AuthProvider";

const SignedIn = () => {
  const history = useHistory();
  const [error, setError] = useState("");
  const { signOut } = useAuthContext();

  const handleSingOut = async () => {
    try {
      await signOut();
      history.push("/signin");
    } catch {
      setError("failed to log out");
    }
  };
  return (
    <>
      <Nav.Item>
        <LinkContainer to="/create">
          <Nav.Link>New Project</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <Button variant="link" onClick={handleSingOut}>
          Log Out
        </Button>
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
