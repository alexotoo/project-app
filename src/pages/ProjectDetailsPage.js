import React from "react";
import { Container, Card } from "react-bootstrap";
import useGetProject from "../hooks/useGetProject";
import formateDate from "../utils/formateDate";

const ProjectDetailsPage = (props) => {
  const id = props.match.params.id;

  const data = useGetProject(id);
  let time = data.createdAt;

  return (
    <Container className="">
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
          <p>{formateDate(time)}</p>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default ProjectDetailsPage;
