import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function LoginBody(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container fluid id="login-container">
      <Row id="login-row-one">
        <Col id="login-row-one-col-one">
          <p id="login-col-one-title">Register Today!</p>
          <Button id="login-col-one-button">Register</Button>
        </Col>
        <Col id="login-row-one-col-two">
          <p id="login-title">Login Now!</p>
          <Form id="login-form">
            <Form.Group>
              <Form.Label className="login-label">Email:</Form.Label>
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
              <Form.Label className="login-label">Password:</Form.Label>
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

            <Button variant="primary" type="submit" id="login-form-button">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
