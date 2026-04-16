import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../shared/UIElement/Particle";
import {
  AiOutlineMail,
  AiOutlineEnvironment,
  AiOutlineLinkedin,
  AiOutlineDownload,
  AiOutlineGlobal,
} from "react-icons/ai";
import html2pdf from "html2pdf.js";

function Resume() {
  const resumeRef = useRef(null);

  useEffect(() => {
    document.title = "Resume | Miro Abdalian — Software Engineer";
  }, []);

  function handleDownload() {
    const element = resumeRef.current;
    if (!element) return;

    const btn = element.querySelector(".resume-download-btn");
    if (btn) btn.style.display = "none";

    const opt = {
      margin: [0.3, 0.4, 0.3, 0.4],
      filename: "Miro_Abdalian_Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      pagebreak: { mode: ["avoid-all", "css"], avoid: [".resume-block", ".resume-entry", ".resume-skills-grid"] },
    };

    html2pdf().set(opt).from(element).save().then(() => {
      if (btn) btn.style.display = "";
    });
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "15px" }}>
            <Col md={10} lg={8} style={{ textAlign: "right" }}>
              <button
                onClick={handleDownload}
                className="resume-download-btn"
              >
                <AiOutlineDownload /> Download Resume
              </button>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Col md={10} lg={8} className="resume-page">
              <div ref={resumeRef} className="resume-pdf-content">
                {/* Header */}
                <div className="resume-header">
                  <h1 className="resume-name">Miro Abdalian</h1>
                  <p className="resume-title-line">Software Engineer &nbsp;|&nbsp; Full-Stack &amp; Systems Integration</p>
                  <div className="resume-contact-row">
                    <span className="resume-contact-item">
                      <AiOutlineEnvironment /> Glendale, CA
                    </span>
                    <span className="resume-contact-item">
                      <AiOutlineMail />{" "}
                      <a href="mailto:miroabdalian@gmail.com">
                        miroabdalian@gmail.com
                      </a>
                    </span>
                    <span className="resume-contact-item">
                      <AiOutlineLinkedin />{" "}
                      <a
                        href="https://www.linkedin.com/in/miro-abdalian-775859208/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        linkedin.com/in/miro-abdalian
                      </a>
                    </span>
                    <span className="resume-contact-item">
                      <AiOutlineGlobal />{" "}
                      <a
                        href="https://miroabdalian.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        miroabdalian.com
                      </a>
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <div className="resume-block">
                  <h2 className="resume-section-heading">Summary</h2>
                  <div className="resume-divider"></div>
                  <p className="resume-summary-text">
                    Software Engineer with 4+ years of experience building
                    full-stack applications, internal tooling, and
                    hardware-integrated systems for real-world deployments.
                    Skilled in Python, C++, Node.js, React, and REST API
                    design with hands-on experience bridging firmware data
                    with desktop interfaces in a defense-adjacent RF/microwave
                    hardware environment. Pursuing M.S. in Computer Science at
                    UT Austin. U.S. citizen eligible for DoD Secret security
                    clearance.
                  </p>
                </div>

                {/* Experience */}
                <div className="resume-block">
                  <h2 className="resume-section-heading">Experience</h2>
                  <div className="resume-divider"></div>

                  <div className="resume-entry">
                    <div className="resume-entry-header">
                      <div className="resume-entry-info">
                        <h3 className="resume-entry-title">
                          Software Engineer
                        </h3>
                        <p className="resume-entry-company">
                          Mission Microwave Technologies
                        </p>
                      </div>
                      <div className="resume-entry-date">
                        2023 &ndash; Present
                      </div>
                    </div>
                    <ul className="resume-entry-list">
                      <li>
                        Built desktop application for real-time monitoring of
                        embedded RF hardware systems (BUCs, SSPAs), bridging
                        firmware telemetry with REST microservices and a
                        native desktop interface
                      </li>
                      <li>
                        Refactored burn-in test automation workflow, reducing
                        total test runtime from 3 days to 2 days through
                        performance analysis, algorithmic improvements, and
                        Python scripting
                      </li>
                      <li>
                        Developed firmware update utilities and OTA
                        distribution pipelines used by internal teams and
                        field customers, emphasizing reliability, error
                        recovery flows, and cloud-based manifest management
                        (AWS)
                      </li>
                      <li>
                        Designed and deployed Python and C++ backend services
                        for device control, deployment workflows, and
                        hardware-software integration across Linux-based
                        embedded systems
                      </li>
                      <li>
                        Collaborated in Agile/Scrum sprint cycles, conducted
                        code reviews, and coordinated cross-functional
                        requirements with hardware, firmware, and product
                        teams
                      </li>
                    </ul>
                  </div>

                  <div className="resume-entry">
                    <div className="resume-entry-header">
                      <div className="resume-entry-info">
                        <h3 className="resume-entry-title">
                          Full-Stack Developer
                        </h3>
                        <p className="resume-entry-company">Freelance - Los Angeles, CA</p>
                      </div>
                      <div className="resume-entry-date">
                        Jun 2022 &ndash; Mar 2023
                      </div>
                    </div>
                    <ul className="resume-entry-list">
                      <li>
                        Built a custom inventory management web application
                        with 20+ React components, Node.js/Express backend,
                        MongoDB database, and RESTful API layer
                      </li>
                      <li>
                        Developed a PyTorch-based anomaly detection model to
                        identify equipment faults from real-time sensor data,
                        integrating ML inference into a full-stack pipeline
                      </li>
                    </ul>
                  </div>

                  <div className="resume-entry">
                    <div className="resume-entry-header">
                      <div className="resume-entry-info">
                        <h3 className="resume-entry-title">
                          Teaching Assistant
                        </h3>
                        <p className="resume-entry-company">Cal Poly Pomona</p>
                      </div>
                      <div className="resume-entry-date">
                        Jul 2021 &ndash; Dec 2022
                      </div>
                    </div>
                    <ul className="resume-entry-list">
                      <li>
                        Supported undergrad CS students with data structures,
                        debugging, and programming concepts across multiple
                        course sections
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Education */}
                <div className="resume-block">
                  <h2 className="resume-section-heading">Education</h2>
                  <div className="resume-divider"></div>

                  <div className="resume-entry">
                    <div className="resume-entry-header">
                      <div className="resume-entry-info">
                        <h3 className="resume-entry-title">
                          M.S. Computer Science (In Progress)
                        </h3>
                        <p className="resume-entry-company">
                          University of Texas at Austin - Online
                        </p>
                      </div>
                      <div className="resume-entry-date">Expected 2027</div>
                    </div>
                    <p className="resume-entry-detail">
                      Coursework: Operating Systems, Parallel Processing,
                      Distributed Systems, Deep Learning, Advanced Algorithms
                    </p>
                  </div>

                  <div className="resume-entry">
                    <div className="resume-entry-header">
                      <div className="resume-entry-info">
                        <h3 className="resume-entry-title">
                          B.S. Computer Science
                        </h3>
                        <p className="resume-entry-company">
                          California State Polytechnic University, Pomona
                        </p>
                      </div>
                      <div className="resume-entry-date">Dec 2022</div>
                    </div>
                    <p className="resume-entry-detail">
                      President's Honor List  2020-2022
                    </p>
                  </div>
                </div>

                {/* Technical Skills */}
                <div className="resume-block">
                  <h2 className="resume-section-heading">Technical Skills</h2>
                  <div className="resume-divider"></div>
                  <div className="resume-skills-grid">
                    <div className="resume-skill-row">
                      <span className="resume-skill-label">Languages</span>
                      <span className="resume-skill-value">
                        Python, C#, C++, JavaScript / TypeScript, HTML5, CSS3, SQL
                      </span>
                    </div>
                    <div className="resume-skill-row">
                      <span className="resume-skill-label">Frameworks</span>
                      <span className="resume-skill-value">
                        React, Next.js, Node.js, Express, FastAPI, WPF, PyTorch
                      </span>
                    </div>
                    <div className="resume-skill-row">
                      <span className="resume-skill-label">Cloud &amp; DevOps</span>
                      <span className="resume-skill-value">
                        AWS, Docker, CI/CD Pipelines, Git, Linux
                      </span>
                    </div>
                    <div className="resume-skill-row">
                      <span className="resume-skill-label">Databases</span>
                      <span className="resume-skill-value">
                        PostgreSQL, MongoDB, SQL Server, SQLite, Firebase
                      </span>
                    </div>
                    <div className="resume-skill-row">
                      <span className="resume-skill-label">Tools &amp; Methods</span>
                      <span className="resume-skill-value">
                        REST API Design, Microservices, Agile/Scrum, TCP/UDP, Serial
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Resume;
