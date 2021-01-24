import React from "react";
import { Card } from "react-bootstrap";

const ProjectSummary = () => {
  return (
    <Card className="m-3">
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        <Card.Text>Posted by AlexooO</Card.Text>
        <Card.Text>24th Jan. 2021</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectSummary;
