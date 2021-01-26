import React from "react";
import { Container, Card } from "react-bootstrap";

const ProjectDetailsPage = (props) => {
  const id = props.match.params.id;

  return (
    <Container className="">
      <Card>
        <Card.Body>
          <Card.Title>Project Title</Card.Title>
          <Card.Text>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            distinctio, laboriosam delectus illo dolores enim perferendis hic
            cum commodi, voluptate eveniet! Ullam veniam itaque eos quo
            asperiores inventore iusto incidunt.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <p>posted by: AlexooO</p>
          <p>24th Jan. 2021</p>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default ProjectDetailsPage;
