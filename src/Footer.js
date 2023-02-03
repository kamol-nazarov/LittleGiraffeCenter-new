import { Container, Row, Button } from "react-bootstrap";

export default function Footer(props) {
  return (
    <Container fluid id="footer-container">
      <Row id="footer-row-one">
        <p id="footer-text">
          Copyright 2023 Little Giraffe Center. All Rights Reserved
        </p>
        <Button className="footer-button">Privacy Policy</Button>
        <Button className="footer-button">Terms Of Use</Button>
      </Row>
    </Container>
  );
}
