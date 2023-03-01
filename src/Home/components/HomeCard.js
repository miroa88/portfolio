import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <span className="purple">Miro Abdalian</span>, a Software Engineer with experience in taking full-stack 
            applications from scratch to production. I'm a recent graduate from California State 
            Polytechnic University, Pomona, with a Computer Science major. I'm currently working
             as a freelance developer, and over the last year, I've had the privilege to work 
             with some amazing clients. My work includes creating mobile apps, web apps, backend
              servers and developing desktop applications. 
              I'm passionate about my work, and I'm always looking for new opportunities to 
              use my skills to create something amazing. I'm excited to continue to work with 
              clients, and I'm always open to new challenges.
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
            "Shoot for the moon. Even if you miss,<br />
            you'll land among the stars."{" "}
          </p>
          <footer className="blockquote-footer">Oscar Wilde</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
