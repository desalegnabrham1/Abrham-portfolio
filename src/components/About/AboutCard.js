import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Abrham Desalegn</span>{" "}
            from <span className="purple">Bahirdar, Ethiopia</span>.
            <br />
            I’m currently studying {" "}
            <span className="purple">Information System</span> at{" "}
            <span className="purple">Bahirdar University</span>.
              
           I’m passionate about becoming a{" "}
           <span className="purple">Full Stack Developer</span> and building
           modern web and mobile applications.
  
            <br />            
            <br />
            Besides of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Podcasts 🎧
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abrham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
