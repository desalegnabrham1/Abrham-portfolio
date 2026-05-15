import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
               I’m a passionate Full Stack Developer focused on building modern,
  scalable, and user-friendly web and mobile applications. I enjoy
  transforming ideas into real digital products that solve real-world
  problems.
              <br />
              <br />
               My main tech stack includes
              <i>
                <b className="purple">
                  {" "}
                  JavaScript,  React.js, Node.js, Express.js, MongoDB, PHP and Flutter{" "}
                </b>
              </i>
               — allowing me to develop both powerful backend systems and beautiful,
  responsive frontend interfaces.
              <br />
              <br />
               I’m highly interested in developing
              <i>
                <b className="purple">
                  {" "}
                   Full Stack Web Applications, Mobile Apps, REST APIs,{" "}
                </b>
              </i>
               and modern interactive user experiences with clean and maintainable code.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
