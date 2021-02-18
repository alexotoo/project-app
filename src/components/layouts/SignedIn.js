import React, { useState, useEffect } from "react";
import { Nav, Button } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../AuthContext/AuthProvider";

const SignedIn = () => {
  const { signOut, initials } = useAuthContext();
  const history = useHistory();
  const [setError] = useState("");
  const [nameInitials, setNameInitials] = useState("");

  useEffect(() => {
    if (!initials) {
      return;
    }
    setNameInitials(initials);
  }, [nameInitials, initials]);

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
        <Button
          style={{ textDecoration: "none" }}
          variant="link"
          onClick={handleSingOut}
        >
          Log Out
        </Button>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/">
          <Nav.Link className="badge  rounded-circle bg-primary py-2 mt-2 mx-3 ">
            {initials}
          </Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </>
  );
};

export default SignedIn;
