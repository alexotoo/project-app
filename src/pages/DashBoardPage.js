import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Notifications from "../components/Notifications";
import ProjectList from "../components/ProjectList";

const DashBoardPage = () => {
  return (
    <Container fluid className="pt-3">
      <Row>
        <Col md={6}>
          <ProjectList />
        </Col>
        <Col md={5}>
          <Notifications />
        </Col>
      </Row>
    </Container>
  );
};

export default DashBoardPage;
