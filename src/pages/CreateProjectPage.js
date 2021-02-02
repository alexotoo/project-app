import React, { useState, useReducer } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { projectReducer } from "../global/reducers/projectReducer";
import { createProjectAction } from "../global/actions/projectActions";

const CreateProjectPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [project, dispatch] = useReducer(projectReducer, {});

  const submitFormHandler = async (e) => {
    e.preventDefault();
    let newProject = { title, content };
    let dispatchable = await createProjectAction(newProject);
    dispatch({ type: dispatchable.type, payload: dispatchable.payload });
    setTitle("");
    setContent("");
  };

  return (
    <Container>
      <h5 className="text-center mb-5">Create New Project</h5>
      <Row>
        <Col md={12} className="center">
          {" "}
          <Form className="mx-5" onSubmit={submitFormHandler}>
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
              Create
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateProjectPage;
