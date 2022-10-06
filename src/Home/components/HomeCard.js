import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="purple">Miro Abdalian</span>
            , and I'm a senior undergraduate student studying computer science (with data science minor) 
            at <span className="purple">Cal Poly Pomona</span>.
            My main areas of interest include
            Object Oriented Programming, Data Structures, and Algorithms.
            I enjoy developing web applications with Node.js and React.js using MongoDB. Likewise 
            developing mobile applications with Flutter and Firebase.
            I've also recently begun exploring Machine Learning and AI 
            techniques and its application to process Big Data.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Fly Fishing
            </li>
            <li className="about-activity">
              <ImPointRight /> Investing in Stocks
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
