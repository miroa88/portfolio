import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function ServiceCard(props) {
  return (
    <Card className="service-card-view">
      {props.isPremium && (
        <div className="service-premium-badge">Premium</div>
      )}
      <Card.Body>
        <div className="service-icon">{props.icon}</div>
        <Card.Title className="service-card-title">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center", fontSize: "0.95em" }}>
          {props.description}
        </Card.Text>
        {props.bullets && props.bullets.length > 0 && (
          <ul className="service-bullets">
            {props.bullets.map((bullet, index) => (
              <li key={index}>
                <ImPointRight
                  className="purple"
                  style={{ marginRight: "8px", flexShrink: 0, marginTop: "4px" }}
                />
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;
