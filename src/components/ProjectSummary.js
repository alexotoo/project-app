import React from "react";
import { Card } from "react-bootstrap";

const ProjectSummary = () => {
  return (
    <Card className="m-3">
      <Card.Body>
        <Card.Title className="text-dark">Project Title</Card.Title>
        <Card.Text className="text-muted">Posted by AlexooO</Card.Text>
        <Card.Text className="text-muted">24th Jan. 2021</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectSummary;
