import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function ContactUsBody(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Container id="contactus-container" fluid>
      <p id="contactus-title">Contact Us</p>
      <Row id="contactus-row-one">
        <Col className="contactus-card">
          <img src="/call.svg" alt="a" className="contactus-card-img" />
          <p className="contactus-card-title">Phone</p>
          <p className="contactus-card-desc">(718)-816-6500</p>
        </Col>
        <Col className="contactus-card">
          <img src="/fax.svg" alt="a" className="contactus-card-img" />
          <p className="contactus-card-title">Fax</p>
          <p className="contactus-card-desc">(888)-966-0155</p>
        </Col>
      </Row>
      <Row id="contactus-row-two">
        <Form>
          <Row id="form-row-one">
            <Col>
              <Form.Group>
                <Form.Label className="form-label">First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your First Name:"
                  value={firstName}
                  onChange={(e) => {
                    e.preventDefault();
                    setFirstName(e.target.value);
                  }}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label className="form-label">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Last Name:"
                  value={lastName}
                  onChange={(e) => {
                    e.preventDefault();
                    setLastName(e.target.value);
                  }}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row id="form-row-two">
            <Form.Group>
              <Form.Label className="form-label">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Email Address:"
                value={email}
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value);
                }}
                required
              />
            </Form.Group>
          </Row>
          <Row id="form-row-three">
            <Form.Group>
              <Form.Label className="form-label">Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Your Message:"
                value={message}
                onChange={(e) => {
                  e.preventDefault();
                  setMessage(e.target.value);
                }}
                required
              />
            </Form.Group>
          </Row>
          <Button type="submit" id="contactus-form-button">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
}
