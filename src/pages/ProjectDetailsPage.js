import React from "react";
import { Container, Card } from "react-bootstrap";
import useGetProject from "../hooks/useGetProject";

const ProjectDetailsPage = (props) => {
  const id = props.match.params.id;

  const { data, isLoading } = useGetProject(id);

  const getPostDate = () => {
    let t = data.createdAt;
    let d = Object.values(t)[0];
    let dateformated = new Date(d * 1000).toUTCString();
    return dateformated;
  };

  return (
    <Container className="">
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        <Card>
          <Card.Body>
            <Card.Title>Project Title:-{data.title}</Card.Title>
            <Card.Text> {data.content}</Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            <p>
              posted by: {data.authorFirstName} {""}
              {data.authorLastName}
            </p>
            <p>{getPostDate()}</p>
          </Card.Footer>
        </Card>
      )}
    </Container>
  );
};

export default ProjectDetailsPage;
