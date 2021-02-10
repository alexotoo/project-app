import React from "react";
import { Nav } from "react-bootstrap";
import { useMutation } from "react-query";
import { LinkContainer } from "react-router-bootstrap";
import { auth } from "../../config/fbconfig";

const SignedIn = () => {
  const onSignOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("out");
      })
      .catch((error) => {
        console.log("error getting out");
      });
  };
  const mutation = useMutation(onSignOut);
  console.log(mutation);

  return (
    <>
      <Nav.Item>
        <LinkContainer to="/create">
          <Nav.Link>New Project</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/">
          <Nav.Link onClick={mutation.mutate}>Log Out</Nav.Link>
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
