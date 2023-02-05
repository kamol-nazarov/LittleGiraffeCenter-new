import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function RegisterBody(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  return (
    <Container fluid id="register-container">
      <Row id="register-row-one">
        <Col id="register-row-one-col-one">
          <p id="register-col-one-title">Already Have An Account?</p>
          <Button id="register-col-one-button">Login</Button>
        </Col>
        <Col id="register-row-one-col-two">
          <p id="register-title">Register Now!</p>
          <Form id="register-form">
            <Form.Group>
              <Form.Label className="register-label">Full Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name:"
                value={name}
                onChange={(e) => {
                  e.preventDefault();
                  setName(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="register-label">Email:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Email Address:"
                value={email}
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="register-label">Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Your Password:"
                value={password}
                onChange={(e) => {
                  e.preventDefault();
                  setPassword(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group id="password-formgroup">
              <Form.Label className="register-label">
                Confirm Password:
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Your Password:"
                value={confirmedPassword}
                onChange={(e) => {
                  e.preventDefault();
                  setConfirmedPassword(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" id="register-form-button">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
