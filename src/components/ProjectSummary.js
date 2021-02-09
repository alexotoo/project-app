import React from "react";
import { Card } from "react-bootstrap";
import formateDate from "../utils/formateDate";

const ProjectSummary = ({ project }) => {
  const time = project.createdAt;

  return (
    <Card className="m-3">
      <Card.Body>
        <Card.Title className="text-dark">{project.title}</Card.Title>
        <Card.Text className="text-muted">{project.authorFirstName}</Card.Text>
        <Card.Text className="text-muted">{formateDate(time)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectSummary;
