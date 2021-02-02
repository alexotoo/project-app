import React, { useReducer, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GlobalStates } from "../App";
import Notifications from "../components/Notifications";
import ProjectList from "../components/ProjectList";
import { projectReducer } from "../global/reducers/projectReducer";
import { useQuery } from "react-query";
import db from "../config/fbconfig";

const DashBoardPage = () => {
  const { projectStates } = useContext(GlobalStates);
  const [projects, dispatch] = useReducer(projectReducer, projectStates);

  const getprojects = async () => {
    let projectsRef = db.collection("projects");
    let allprojects = await projectsRef.get();
    const data = allprojects.docs.map((doc) => doc.data());

    return data;
  };

  const { data, status } = useQuery("fbdata", getprojects);
  console.log(data, status);

  return (
    <Container fluid className="">
      <Row>
        <Col md={6}>
          <ProjectList projects={projects} />
        </Col>
        <Col md={5}>
          <Notifications />
        </Col>
      </Row>
    </Container>
  );
};

export default DashBoardPage;
