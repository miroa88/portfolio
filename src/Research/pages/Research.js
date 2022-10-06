import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Particle from "../../shared/UIElement/Particle";
import pdf_1 from "../../Assets/IoT_Smart_Cites.pdf";
import pdf_2 from "../../Assets/IoT_Intelligent_Systems.pdf";
import { AiOutlineDownload } from "react-icons/ai";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function Research() {

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", "padding-bottom": "50px"}}>
          <Card style={{ width: '50rem' }}>
            <Card.Img variant="top" src="https://www.clariontech.com/hubfs/BlogImage-78.png" />
            <Card.Body>
              <Card.Title style={{ color: "black"}}>AI-Powered IoT for Intelligent Systems</Card.Title>
              <Card.Text style={{ color: "black", justifyContent: "start"}}>
                <div style={{ "text-align": "left"}}>
                  In recent years, intelligent systems (ISs) have been developed 
                  to implement tasks requiring physical and mental effort. These 
                  systems are pervasive and useful in virtually all aspects of life,
                  from routine tasks to professional activities. The convergence of
                  artificial intelligence (AI) and the internet of things (IoT) delivers
                  the intelligence and real-time decision-making required for optimal 
                  IS performance. The current study reviewed recent literature to 
                  document AI approaches compatible with IoT, especially over the
                  cloud-edge architecture. The main identified options were deep 
                  learning, machine learning, genetic algorithms, reinforcement 
                  learning, generative models, and distributed AI. These methods 
                  can rapidly process IoT data in the edge cloud, allowing ISs to 
                  obtain practical interpretations for real-time, autonomous 
                  decision-making and responses to their environments.       
                </div>   
              </Card.Text>
              <Button
              variant="primary"
              href={pdf_1}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download R.
            </Button>
            </Card.Body>
          </Card>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Card style={{ width: '50rem' }}>
            <Card.Img variant="top" src="https://i0.wp.com/iotbusinessnews.com/WordPress/wp-content/uploads/IoT-smart-city.jpg?fit=800%2C360&ssl=1" />
            <Card.Body>
              <Card.Title style={{ color: "black"}}>Smart Cities</Card.Title>
              <Card.Text style={{ color: "black", justifyContent: "start"}}>
                <div style={{ "text-align": "left"}}>
                The increasing population in urban areas and inadequate 
                access to resources make it difficult for public agencies 
                to provide quality services. To address issues associated 
                with the quickly changing social environment, such as hyper-urbanization, 
                and to secure financial and ecological stability, smart cities have 
                become a common phenomenon. The integration of internet of things 
                (IoT) into city transportation applications is key in fostering 
                economic development, modernizing city infrastructure, enhancing 
                climate conditions, streamlining transit systems, and reducing 
                the cost of managing public resources. Combining IoT and AI offers 
                illuminating insights that can aid urban regions in mitigating 
                the impact of contemporary socioeconomic concerns. There is 
                currently no standard of commonly accepted set of definitions 
                that appropriately characterize a “smart city”. However, 
                smart cities make use of artificial intelligence and a network 
                of sensors for collecting data. The utilization of artificial 
                intelligence to automate systems is central to the conceptualization 
                of smart cities. At their core, smart cities encompass the 
                application of technologies and various sorts of information 
                sensors and actuators to enhance municipal frameworks and daily operations.      
                </div>   
              </Card.Text>
              <Button
              variant="primary"
              href={pdf_2}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download R.
            </Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Research;