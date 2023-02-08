import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="purple">Miro Abdalian</span>. I am a computer science leader 
             graduated from California State Polytechnic University - Pomona in 
             December 2022. I have expertise in software design, architecture, 
            object-oriented programming, and agile development. I have demonstrated success with web 
             technologies such as React and Node.js. My skills include cross-functional
              team collaboration, hardware software verification, operational performance
               requirements, software development life cycle, and shell scripting.
                I am also experienced in creating software test procedures and utilizing modeling equipment/tools.
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
              <ImPointRight /> Travelling
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
