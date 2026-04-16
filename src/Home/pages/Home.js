import React, { useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";

import Particle from "../../shared/UIElement/Particle";
import Techstack from "../components/Techstack";
import Aboutcard from "../components/HomeCard";
import profileImg from "../../Assets/profile.jpg";
import Toolstack from "../components/Toolstack";

import './Home.css';
function Home() {
  useEffect(() => {
    document.title = "Miro Abdalian | Software Engineer — IoT, Full-Stack, AI";
  }, []);

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Hero Section */}
        <Row className="hero-section">
          <Col md={12} className="hero-content">
            <div className="profile-wrapper">
              <div className="profile-ring">
                <img src={profileImg} alt="Miro Abdalian" className="profile" />
              </div>
            </div>
            <h1 className="hero-name">
              Miro <span className="purple">Abdalian</span>
            </h1>
            <p className="hero-tagline">
              Software Engineer &nbsp;|&nbsp; Full-Stack & IoT Developer &nbsp;|&nbsp; M.S. CS @ UT Austin
            </p>
          </Col>
        </Row>

        {/* About Section */}
        <Row style={{ justifyContent: "center", paddingTop: "30px" }}>
          <Col md={10} lg={8}>
            <Aboutcard />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/miro-abdalian-775859208/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
