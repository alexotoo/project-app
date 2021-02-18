import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Notifications from "../components/Notifications";
import PagePagination from "../components/PagePagination";
import ProjectList from "../components/ProjectList";
import useGetProjects from "../hooks/useGetProjects";

const DashBoardPage = () => {
  const { data, isLoading } = useGetProjects();
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(5);

  useEffect(() => {
    if (data) {
      setProjects(data);
    } else {
      return;
    }
  }, [data]);

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
