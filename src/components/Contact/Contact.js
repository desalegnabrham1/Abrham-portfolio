import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Contact() {
  return (
    <>
      <Particle />
      <Container fluid className="contact-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={8} className="contact-content">
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Contact <strong className="purple">Me</strong>
              </h1>
            <div className="contact-info">
              <p><strong>Email:</strong> <a href="mailto:desalegnabrham1@gmail.com" target="_blank" className="contact-link">desalegnabrham1@gmail.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+251986826610" className="contact-link">+251986826610</a></p>
              <p><strong>Location:</strong> Bahirdar, Ethiopia</p>
            </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Contact;