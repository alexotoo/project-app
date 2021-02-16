import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Notifications from "../components/Notifications";
import ProjectList from "../components/ProjectList";
import useGetProjects from "../hooks/useGetProjects";

const DashBoardPage = () => {
  const { data, isLoading } = useGetProjects();

  return (
    <Container fluid className="">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Row>
          <Col md={7}>
            <ProjectList projects={data} />
          </Col>
          <Col md={5}>
            <Notifications notifications={data} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default DashBoardPage;
