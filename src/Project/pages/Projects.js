import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCards";
import Particle from "../../shared/UIElement/Particle";

function Projects() {
  useEffect(() => {
    document.title = "Projects | Miro Abdalian — Client Work & Solutions";
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Client <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          A selection of projects delivered for clients across various
          industries.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              category="IoT / Full-Stack"
              title="Industrial Equipment Monitoring Dashboard"
              description="Built a real-time monitoring dashboard for a manufacturing client to track equipment health, temperature, and vibration data across multiple factory floors. The system ingests sensor data via MQTT, processes it through a Node.js backend, and displays live metrics on a React dashboard with alert thresholds and historical trend analysis."
              tech={[
                "React",
                "Node.js",
                "MQTT",
                "MongoDB",
                "WebSocket",
                "Chart.js",
              ]}
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              category="Desktop Application"
              title="RF Test Automation Suite"
              description="Developed a WPF desktop application for an RF engineering firm to automate test sequences for satellite communication amplifiers. The application controls instruments via serial and GPIB interfaces, executes configurable test plans, logs results to a SQL database, and generates compliance reports."
              tech={[
                "C#",
                "WPF",
                "MVVM",
                "SQL Server",
                "Serial/GPIB",
                "XAML",
              ]}
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              category="AI / Automation"
              title="AI-Powered Invoice Processing System"
              description="Designed and deployed an intelligent document processing pipeline for a logistics company. The system uses OCR and LLM APIs to extract line items from scanned invoices, validate data against purchase orders, and push approved entries into the client's accounting software via REST API."
              tech={[
                "Python",
                "OpenAI API",
                "FastAPI",
                "PostgreSQL",
                "Docker",
              ]}
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              category="Backend / API"
              title="Multi-Tenant SaaS API Platform"
              description="Architected a RESTful API backend for a SaaS startup serving property management companies. Implemented tenant isolation, role-based access control, Stripe payment integration, and automated lease document generation. The API serves a React frontend and a mobile app."
              tech={[
                "Node.js",
                "Express",
                "MongoDB",
                "JWT",
                "Stripe API",
                "AWS",
              ]}
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              category="IoT / Full-Stack"
              title="Smart HVAC Control Panel"
              description="Delivered a full-stack IoT solution for a smart building startup. Built an embedded data collector running on Raspberry Pi units, a cloud backend for telemetry aggregation, and a React admin panel allowing facility managers to monitor zones, set schedules, and receive energy usage reports."
              tech={[
                "React",
                "Node.js",
                "Firebase",
                "Raspberry Pi",
                "Python",
                "MQTT",
              ]}
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              category="Desktop Application"
              title="Warehouse Inventory Management Tool"
              description="Built a Windows Forms application for a distribution company to manage warehouse inventory across three locations. Features include barcode scanning integration, real-time stock level tracking, automated reorder alerts, and export to CSV and PDF for reporting."
              tech={[
                "C#",
                "Windows Forms",
                "SQL Server",
                "Crystal Reports",
                "REST API",
              ]}
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              category="AI / Automation"
              title="Internal Knowledge Base Chatbot"
              description="Developed a custom chatbot for an engineering firm's internal documentation. The system indexes technical manuals and SOPs, uses embeddings for semantic search, and provides context-aware answers to employee queries through a web interface integrated with the company's intranet."
              tech={[
                "Python",
                "LangChain",
                "OpenAI API",
                "React",
                "Pinecone",
                "Docker",
              ]}
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              category="Full-Stack / E-Commerce"
              title="Custom E-Commerce Platform"
              description="Developed a full-featured e-commerce platform for a retail client with product catalog management, shopping cart, Stripe checkout, order tracking, and an admin dashboard. Built with server-side rendering for SEO and integrated with a third-party shipping API for real-time rate calculation."
              tech={[
                "React",
                "Node.js",
                "MongoDB",
                "Stripe",
                "Express",
                "AWS S3",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
