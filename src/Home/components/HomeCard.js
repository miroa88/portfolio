import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center", fontSize: "1.1em", lineHeight: "1.8" }}>
            Software Engineer at <strong>Mission Microwave Technologies</strong> with {new Date().getFullYear() - 2023}+ years
            building production desktop apps, RESTful APIs, and backend systems
            for the RF & satellite communications industry.
            <br /><br />
            Currently pursuing an <strong>M.S. in Computer Science</strong> at UT Austin.
            Freelance developer specializing in <span className="purple">IoT solutions</span>,{" "}
            <span className="purple">AI-powered automation</span>, and{" "}
            <span className="purple">enterprise applications</span>.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
