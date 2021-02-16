import React from "react";
import { Container, Card } from "react-bootstrap";
import useGetProject from "../hooks/useGetProject";
import moment from "moment";

const ProjectDetailsPage = (props) => {
  const id = props.match.params.id;

  const data = useGetProject(id);
  const date = moment(data.createdAt.toDate()).calendar();

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title className="t-color">
            Project Title:-{data.title}
          </Card.Title>
          <Card.Text> {data.content}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <p>
            posted by: {data.authorFirstName} {""}
            {data.authorLastName}
          </p>
          <p>{date}</p>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default ProjectDetailsPage;
