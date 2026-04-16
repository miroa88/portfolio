import React from "react";
import Card from "react-bootstrap/Card";
import { BsGlobe, BsCpu, BsLightning, BsServer, BsCart3 } from "react-icons/bs";

const categoryIcons = {
  "IoT / Full-Stack": <BsCpu />,
  "Desktop Application": <BsServer />,
  "AI / Automation": <BsLightning />,
  "Backend / API": <BsServer />,
  "Full-Stack / E-Commerce": <BsCart3 />,
};

function ProjectCards(props) {
  const icon = categoryIcons[props.category] || <BsGlobe />;

  return (
    <Card className="project-card-view">
      <Card.Body>
        <div className="project-card-header">
          <span className="project-card-icon">{icon}</span>
          <div className="project-card-category">{props.category}</div>
        </div>
        <Card.Title className="project-card-title">{props.title}</Card.Title>
        <Card.Text className="project-card-description">
          {props.description}
        </Card.Text>
        {props.tech && props.tech.length > 0 && (
          <div className="project-tech-tags">
            {props.tech.map((t, index) => (
              <span key={index} className="project-tech-tag">
                {t}
              </span>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
