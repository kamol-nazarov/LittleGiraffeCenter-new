import { Container, Row, Card, Col } from "react-bootstrap";

export default function AboutUsBody(props) {
  return (
    <Container fluid id="aboutus-container">
      <Row id="aboutus-row-one">
        <p id="aboutus-row-one-title">About Little Giraffe Center</p>
        <div id="aboutus-row-one-div">
          <p id="ourjourney-title">Our Journey</p>
          <p id="ourjourney-desc">
            To provide quality care through Pediatric Early Intervention and to
            ensure fiscal viability and the future of its vision, the Little
            Giraffe Center will foster a supportive growth and learning
            environment, which will empower staff and families to become part of
            the therapy team. The Little Giraffe Center will continue to listen
            and respond to community needs in an atmosphere of fun and
            creativity. Our treatment center include swings, sensory rooms,
            functional play rooms, and play gyms.
          </p>
        </div>
      </Row>
      <Row id="ourmission-row">
        <div id="ourmission-div">
          <p id="ourmission-title">Our Mission</p>
          <p id="ourmission-desc">
            to continue to make a difference to children, families and
            employers, and to provide the highest quality early care and
            education for each child in each nursery, every day.
          </p>
        </div>
      </Row>
      <Row id="whychoose-row">
        <p id="whychoose-row-title">Why Kids and Their Parents Choose Us</p>
        <Row id="whychoose-cards">
          <Col>
            <Card className="whychoose-card">
              <Card.Img
                variant="top"
                src="/playtime.svg"
                className="whychoose-image"
              />
              <Card.Body className="whychoose-cardbody">
                <Card.Title className="whychoose-cardtitle">
                  Activity Rooms
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="whychoose-card">
              <Card.Img
                variant="top"
                src="/piano.svg"
                className="whychoose-image"
              />
              <Card.Body className="whychoose-cardbody">
                <Card.Title className="whychoose-cardtitle">
                  Music and Art Rooms
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="whychoose-card">
              <Card.Img
                variant="top"
                src="/baby-room.svg"
                className="whychoose-image"
              />
              <Card.Body className="whychoose-cardbody">
                <Card.Title className="whychoose-cardtitle">
                  Play Rooms
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="whychoose-card">
              <Card.Img
                variant="top"
                src="/virtual-class.svg"
                className="whychoose-image"
              />
              <Card.Body className="whychoose-cardbody">
                <Card.Title className="whychoose-cardtitle">
                  We Offer Classes
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="whychoose-card">
              <Card.Img
                variant="top"
                src="/consulting.svg"
                className="whychoose-image"
              />
              <Card.Body className="whychoose-cardbody">
                <Card.Title className="whychoose-cardtitle">
                  TeleHealth Services
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
