import React, { useReducer, useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GlobalStates } from "../App";
import Notifications from "../components/Notifications";
import ProjectList from "../components/ProjectList";
import { projectReducer } from "../global/reducers/projectReducer";
import { useQuery } from "react-query";

import { getAllProjects } from "../global/actions/projectActions";

const DashBoardPage = () => {
  const { projectStates } = useContext(GlobalStates);
  const [projects, dispatch] = useReducer(projectReducer, projectStates);

  const { data, status } = useQuery("fbdata", getAllProjects);

  // const dispatchData = () => {
  //   if (status === "success") {
  //     dispatch({ payload: data.payload, type: data.type });
  //   } else {
  //     return status.error;
  //   }
  // };

  useEffect(() => {
    const dispatchData = () => {
      if (status === "success") {
        dispatch({ payload: data.payload, type: data.type });
      } else {
        return status.error;
      }
    };
    dispatchData();
  }, [data, status]);

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
