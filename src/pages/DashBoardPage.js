import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Notifications from "../components/Notifications";
import PagePagination from "../components/PagePagination";
import ProjectList from "../components/ProjectList";
import useGetProject from "../hooks/useGetProject";
import useGetProjects from "../hooks/useGetProjects";

const DashBoardPage = () => {
  const { data, isLoading, isSuccess } = useGetProjects();
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(5);

  console.log(data);
  console.log(projects);

  useEffect(() => {
    if (isSuccess) {
      setProjects(data);
    } else {
      console.log(projects);
    }
  }, [isSuccess]);

  //get current project page number
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  //change pages
  const paginator = (numberOfPages) => setCurrentPage(numberOfPages);

  return (
    <Container fluid className="">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Row>
          <Col md={7}>
            <ProjectList projects={currentProjects} />
            <PagePagination
              projectsPerPage={projectsPerPage}
              totalProjects={projects.length}
              paginator={paginator}
              currentPage={currentPage}
            />
          </Col>
          <Col md={5}>
            <Notifications notifications={projects} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default DashBoardPage;
