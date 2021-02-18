import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../components/AuthContext/AuthProvider";
import { db } from "../config/fbconfig";

const CreateProjectPage = () => {
  const history = useHistory();
  const { firstN, lastN } = useAuthContext();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const newProject = {
    authorFirstName: firstN,
    authorLastName: lastN,
    content,
    createdAt: new Date(),
    title,
  };

  const mutation = useMutation((newProject) => {
    return db.collection("projects").add(newProject);
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync(newProject);
      setTitle("");
      setContent("");
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h5 className="text-center mb-5">Create New Project</h5>
      <Row>
        <Col md={12} className="center">
          {" "}
          <Form className="mx-5" onSubmit={submitHandler}>
            <Form.Group controlId="title">
              <Form.Label className="text-start">Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                placeholder="project title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                value={content}
                placeholder="project content"
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {mutation.isLoading ? <h4>send...</h4> : <h4>Create</h4>}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateProjectPage;
