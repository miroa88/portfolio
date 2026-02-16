import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
              Hello! I'm <span className="purple">Miro Abdalian</span>, a Software Engineer with over 
              <strong> 3 years of experience</strong> building full-stack web, desktop, and backend applications. 
              I hold a <strong>B.S. in Computer Science</strong> from California State Polytechnic University, Pomona, 
              and I'm currently pursuing my <strong>M.S. in Computer Science</strong> at the University of Texas at Austin.
              <br /><br />
              I currently work at <strong>Mission Microwave Inc</strong>, where I've contributed to GUI tools, RESTful APIs, 
              and backend systems for RF communication products. I also take on freelance projects, 
              helping clients bring their ideas to life with clean, scalable solutions.
              <br /><br />
              My stack includes technologies like <strong>React, Node.js, Java, C#, and Python</strong>. 
              I've delivered production-grade systems ranging from e-commerce platforms to internal engineering tools. 
              I'm passionate about solving real-world problems through thoughtful software design, and I'm 
              always eager to take on new challenges.
              <br /><br />
              Let's build something great together.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Fly Fishing
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Great things are built in silence, tested with fire,<br />
            and launched with courage."
          </p>
      
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
