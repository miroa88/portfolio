import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCards";
import Particle from "../../shared/UIElement/Particle";
import gcc from "../../Assets/Projects/C++.png";
import django from "../../Assets/Projects/django.png";
import flutter from "../../Assets/Projects/Flutter.png";
import jupyter from "../../Assets/Projects/Jupyter.png";
import python from "../../Assets/Projects/Python.png";
import reactNode from "../../Assets/Projects/ReactNode.png";
import mern from "../../Assets/Projects/Mern.png";
import colab from "../../Assets/Projects/Colab.png";
import react from "../../Assets/Projects/React.png";
import reactFire from "../../Assets/Projects/ReactFire.png";

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
              imgPath={reactFire}
              isBlog={false}
              title="Online Store - eCommerce Web App"
              ghLink="https://github.com/miroa88/blog.git"
              demoLink="https://peaceful-cucurucho-02c3dc.netlify.app/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactNode}
              isBlog={false}
              title="Image Recognition Web App"
              ghLink="https://github.com/miroa88/image_AI_frontend"
              demoLink="https://main.d3jixdxenlv1e8.amplifyapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flutter}
              isBlog={false}
              title="Meeting Scheduler Mobile App"
              ghLink="https://github.com/miroa88/flutter-ontime"
              demoLink="https://miroa88.github.io/landing-page/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={python}
              isBlog={true}
              title="Personal Scheduling System"
              ghLink="https://github.com/CS3560-PSS-Project/Python-PSS"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jupyter}
              isBlog={true}
              title="Logistic Regression Model"
              ghLink="https://github.com/miroa88/jupyter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mern}
              isBlog={false}
              title="Inventory Management Web App"
              ghLink=""
              demoLink="https://instyle-boutique.web.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={colab}
              isBlog={false}
              title="KNN Machine Learning Model"
              ghLink="https://github.com/miroa88/knn"
              demoLink="https://www.overleaf.com/read/dmjdwfffzqzt"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={true}
              title="Portfolio - Single Page web App "
              ghLink="https://github.com/miroa88/portfolio"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
