import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import taskflow from "../../Assets/Projects/taskflow.png";
import InternMatch from "../../Assets/Projects/InternMatch.png";
import QuizApp from "../../Assets/Projects/QuizApp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskflow}
              isBlog={false}
              title="TaskFlow"
              description="A task management application built with React.js and Firebase. It allows users to create, update, and delete tasks, set deadlines, and track progress."
              ghLink="https://github.com/desalegnabrham1/Taskflow-pro"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={InternMatch}
              isBlog={false}
              title="InternMatch"
              description="InternMatch is a Flutter and Firebase-based mobile app that helps students find and apply for internships while allowing companies to post and manage internship opportunities."
              ghLink="https://github.com/desalegnabrham1/InternMatch_app"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuizApp}
              isBlog={false}
              title="Online Quiz App"
              description="An online quiz management system built with PHP, MySQL, HTML, CSS, and JavaScript. It lets teachers create quizzes, students take timed exams, and admins view results and reports."
              ghLink="https://github.com/desalegnabrham1/Online-Quiz-Management-System"
              
            />
          </Col>

           </Row>
      </Container>
    </Container>
  );
}

export default Projects;
