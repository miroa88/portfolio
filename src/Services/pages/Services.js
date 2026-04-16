import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../shared/UIElement/Particle";
import ServiceCard from "../components/ServiceCard";
import { MdSensors } from "react-icons/md";
import { SiOpenai } from "react-icons/si";
import { AiOutlineWindows } from "react-icons/ai";
import { FaServer } from "react-icons/fa";

function Services() {
  useEffect(() => {
    document.title = "Services | Miro Abdalian — IoT, AI, Desktop & API Development";
  }, []);

  return (
    <Container fluid className="services-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Services</strong>
        </h1>
        <p style={{ color: "white", fontSize: "1.2em", textAlign: "center" }}>
          Full-Stack IoT Developer | React Dashboards{" "}
          <strong className="purple">&bull;</strong> Node.js APIs{" "}
          <strong className="purple">&bull;</strong> Hardware-to-Cloud Solutions
        </p>
        <p
          style={{
            color: "white",
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto",
            paddingBottom: "20px",
          }}
        >
          I am available for contract and freelance work. Whether you need a
          full IoT system from sensor to dashboard, a polished desktop
          application, or a robust REST API, I bring production-tested
          experience across the entire stack. Let me help you turn your idea
          into a reliable, scalable solution.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="service-card">
            <ServiceCard
              icon={<MdSensors />}
              title="IoT Full-Stack Solutions"
              isPremium={true}
              description="End-to-end IoT systems from hardware integration to cloud dashboards."
              bullets={[
                "Sensor/microcontroller integration (UART, SPI, I2C)",
                "Real-time React dashboards with live data visualization",
                "Node.js / Express backend services and MQTT brokers",
                "Cloud deployment (AWS IoT, Firebase, Azure)",
                "Embedded-to-cloud data pipelines",
              ]}
            />
          </Col>
          <Col md={6} className="service-card">
            <ServiceCard
              icon={<SiOpenai />}
              title="AI-Augmented Development & Automation"
              description="Accelerate your workflows with intelligent automation and AI integration."
              bullets={[
                "AI-powered features integrated into existing applications",
                "Workflow automation with LLM APIs (OpenAI, Claude)",
                "Intelligent data processing and document parsing",
                "Custom AI tooling for internal engineering teams",
                "Rapid prototyping with AI-assisted development",
              ]}
            />
          </Col>
          <Col md={6} className="service-card">
            <ServiceCard
              icon={<AiOutlineWindows />}
              title="Desktop Application Development"
              description="Professional Windows applications built with WPF and Windows Forms."
              bullets={[
                "WPF applications with modern MVVM architecture",
                "Windows Forms utilities and engineering tools",
                "Serial port and hardware device communication",
                "Custom GUI control panels for hardware products",
                "Legacy application modernization and maintenance",
              ]}
            />
          </Col>
          <Col md={6} className="service-card">
            <ServiceCard
              icon={<FaServer />}
              title="REST API Development & Backend Services"
              description="Scalable, well-documented APIs and backend systems."
              bullets={[
                "RESTful API design and implementation (Node.js, Express)",
                "Database architecture (MongoDB, MySQL, Firebase)",
                "Authentication and authorization (JWT, OAuth)",
                "Third-party API integration and middleware",
                "API documentation and testing",
              ]}
            />
          </Col>
        </Row>

        <Row
          style={{
            justifyContent: "center",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          <Col md={8} style={{ textAlign: "center" }}>
            <h2
              style={{
                color: "white",
                fontSize: "1.6em",
                paddingBottom: "15px",
              }}
            >
              Ready to <strong className="purple">get started</strong>?
            </h2>
            <p style={{ color: "white", paddingBottom: "15px" }}>
              I would love to discuss your project. Reach out and let's build
              something great together.
            </p>
            <a
              href="https://www.linkedin.com/in/miro-abdalian-775859208/"
              target="_blank"
              rel="noreferrer"
              className="services-cta-btn"
            >
              Get In Touch
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Services;
