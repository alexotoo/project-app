import moment from "moment";
import React from "react";
import { Card } from "react-bootstrap";

const ProjectSummary = ({ project }) => {
  const date = moment(project.createdAt.toDate()).calendar();

  return (
    <Card className="mb-2 mt-3">
      <Card.Body>
        <Card.Title className="text-dark">{project.title}</Card.Title>
        <Card.Text className="text-muted">
          Posted by: {project.authorFirstName}
        </Card.Text>
        <Card.Text className="text-muted">{date}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectSummary;
