import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useQuery } from "react-query";
import db from "../config/fbconfig";

const ProjectDetailsPage = (props) => {
  const [project, setProject] = useState("");
  const id = props.match.params.id;

  const getOneProject = async (id) => {
    let projectRef = db.collection("projects").doc(id);
    const getProject = await projectRef.get();

    let fbprojectRef = await getProject.data();
    setProject(fbprojectRef);
  };
  // const { data, status } = useQuery("onefbdata", getOneProject(id));
  // console.log(data, status);

  console.log(project.createdAt);

  useEffect(() => {
    getOneProject(id);
  }, []);

  return (
    <Container className="">
      <Card>
        <Card.Body>
          <Card.Title>Project Title:-{project.title}</Card.Title>
          <Card.Text> {project.content}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <p>
            posted by: {project.authorFirstName} {""}
            {project.authorLastName}
          </p>
          <p>{}</p>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default ProjectDetailsPage;
