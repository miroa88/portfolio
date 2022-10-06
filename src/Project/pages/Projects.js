import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCards";
import Particle from "../../shared/UIElement/Particle";
import gcc from "../../Assets/Projects/C++.png";
import django from "../../Assets/Projects/django.png";
import flutter from "../../Assets/Projects/Flutter.png";
import jupyter from "../../Assets/Projects/Jupyter.png";
import python from "../../Assets/Projects/Python.png";
import react from "../../Assets/Projects/React.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flutter}
              isBlog={false}
              title="onTime"
              ghLink="https://github.com/miroa88/flutter-ontime"
              demoLink="https://miroa88.github.io/landing-page/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="Image AI"
              ghLink="https://github.com/miroa88/image_AI_frontend"
              demoLink="https://github.com/miroa88/image_AI_backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={python}
              isBlog={true}
              title="PSS"
              ghLink="https://github.com/CS3560-PSS-Project/Python-PSS"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jupyter}
              isBlog={true}
              title="Machine Learning"
              ghLink="https://github.com/miroa88/jupyter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gcc}
              isBlog={true}
              title="Matrix"
              ghLink="https://github.com/miroa88/matrix"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={django}
              isBlog={false}
              title="Blog"
              ghLink="https://github.com/miroa88/blog.git"
              demoLink="" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
