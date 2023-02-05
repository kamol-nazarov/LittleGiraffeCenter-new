import { Container, Row, Nav, Col, NavDropdown } from "react-bootstrap";
import { useEffect } from "react";

export default function Header(props) {
  useEffect(() => {
    switch (props.current_page) {
      case "aboutus":
        document.getElementById("aboutus-button").style.backgroundColor =
          "#a85751";
        document.getElementById("aboutus-text").style.color = "#f4eea9";
        break;
      case "ourlocations":
        document.getElementById("ourlocations-button").style.backgroundColor =
          "#a85751";
        document.getElementById("ourlocations-text").style.color = "#f4eea9";
        break;
      case "contactus":
        document.getElementById("contactus-button").style.backgroundColor =
          "#a85751";
        document.getElementById("contactus-text").style.color = "#f4eea9";
        break;
      default:
        break;
    }
  }, [props]);

  return (
    <Container fluid>
      <Row id="nav-row-one">
        <Nav id="nav-one">
          <Nav.Item id="nav-one-navitem">
            <p id="nav-one-links">
              <a href="/login" id="login-link" className="nav-one-links">
                Login
              </a>
              <a href="/register" id="register-link" className="nav-one-links">
                Register
              </a>
            </p>
          </Nav.Item>
        </Nav>
      </Row>
      <Row id="nav-row-two">
        <img
          src="/littlegiraffecenter_logo.svg"
          alt="main-logo"
          id="navbar-logo"
          onClick={() => {
            window.location.href = "/";
          }}
        />
      </Row>
      <Row id="nav-row-three">
        <Col
          className="eachbutton-col"
          id="aboutus-button"
          onClick={() => {
            document
              .querySelector("#aboutus-button")
              .animate(
                [
                  { transform: "scale(1.0)" },
                  { transform: "scale(1.1) rotate(-2deg)" },
                  { transform: "scale(1.0)" },
                ],
                {
                  duration: 200,
                  iterations: 1,
                }
              );

            window.location.href = "/aboutus";
          }}
        >
          <p className="eachbutton-item" id="aboutus-text">
            About Us
          </p>
        </Col>
        <Col
          className="eachbutton-col"
          id="appointment-button"
          onClick={() => {
            document
              .querySelector("#appointment-button")
              .animate(
                [
                  { transform: "scale(1.0)" },
                  { transform: "scale(1.1) rotate(-2deg)" },
                  { transform: "scale(1.0)" },
                ],
                {
                  duration: 200,
                  iterations: 1,
                }
              );

            window.location.href = "/makeappointment";
          }}
        >
          <p className="eachbutton-item">Make An Appointment</p>
        </Col>
        <Col className="eachbutton-col">
          <NavDropdown
            title="Articles"
            id="nav-dropdown"
            className="eachbutton-item"
          >
            <NavDropdown.Item className="article-item">
              Ages and Stages
            </NavDropdown.Item>
            <NavDropdown.Item className="article-item">
              Healthy Living
            </NavDropdown.Item>
            <NavDropdown.Item className="article-item">
              Safety and Prevention
            </NavDropdown.Item>
            <NavDropdown.Item className="article-item">
              Family Life
            </NavDropdown.Item>
            <NavDropdown.Item className="article-item">
              Health Issues
            </NavDropdown.Item>
          </NavDropdown>
        </Col>
        <Col
          className="eachbutton-col"
          id="ourlocations-button"
          onClick={() => {
            document
              .querySelector("#ourlocations-button")
              .animate(
                [
                  { transform: "scale(1.0)" },
                  { transform: "scale(1.1) rotate(-2deg)" },
                  { transform: "scale(1.0)" },
                ],
                {
                  duration: 200,
                  iterations: 1,
                }
              );

            window.location.href = "/ourlocations";
          }}
        >
          <p className="eachbutton-item" id="ourlocations-text">
            Our Locations
          </p>
        </Col>
        <Col
          className="eachbutton-col"
          id="contactus-button"
          onClick={() => {
            document
              .querySelector("#contactus-button")
              .animate(
                [
                  { transform: "scale(1.0)" },
                  { transform: "scale(1.1) rotate(-2deg)" },
                  { transform: "scale(1.0)" },
                ],
                {
                  duration: 200,
                  iterations: 1,
                }
              );

            window.location.href = "/contactus";
          }}
        >
          <p className="eachbutton-item" id="contactus-text">
            Contact Us
          </p>
        </Col>
      </Row>
    </Container>
  );
}
