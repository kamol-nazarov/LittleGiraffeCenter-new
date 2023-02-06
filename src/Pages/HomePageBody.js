import { Container, Row, Carousel, Button, Card, Col } from "react-bootstrap";

export default function HomePageBody(props) {
  return (
    <Container fluid id="homepagebody-container">
      <Row>
        <Carousel
          id="carousel"
          indicators={false}
          pause={true}
          nextIcon={
            <span aria-hidden="true" className="carousel-control-next-icon" />
          }
        >
          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100"
              src="/carousel_image_one.svg"
              alt="First slide"
            />
            <Carousel.Caption className="carousel-caption">
              <p className="carousel-caption-title">
                Early Treatment For Obesity
              </p>
              <p className="carousel-caption-desc">
                Why Not To Wait and See If Kids Grow Out Of This Complex,
                Chronic Disease
              </p>
              <Button
                className="carousel-caption-button"
                onClick={() => {
                  window.location.href = "/obesityarticle";
                }}
              >
                Read More
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100"
              src="/carousel_image_two.svg"
              alt="First slide"
            />
            <Carousel.Caption className="carousel-caption">
              <p className="carousel-caption-title">
                Start The New Year Strong
              </p>
              <p className="carousel-caption-desc">
                Healthy and Concrete Parenting Goals For The Year Ahead
              </p>
              <Button
                className="carousel-caption-button"
                onClick={() => {
                  window.location.href = "/parentinggoals";
                }}
              >
                Read More
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100"
              src="/carousel_image_three.svg"
              alt="First slide"
            />
            <Carousel.Caption className="carousel-caption">
              <p className="carousel-caption-title">
                Sudden Cardiac Arrest In Young People
              </p>
              <p className="carousel-caption-desc">
                While It's Rare, Here What Families Should Know
              </p>
              <Button className="carousel-caption-button">Read More</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100"
              src="/carousel_image_four.svg"
              alt="First slide"
            />
            <Carousel.Caption className="carousel-caption">
              <p className="carousel-caption-title">
                Fever Medcicines For Children
              </p>
              <p className="carousel-caption-desc">
                What To Do In Emergency Cases
              </p>
              <Button className="carousel-caption-button">Read More</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100"
              src="/carousel_image_five.svg"
              alt="First slide"
            />
            <Carousel.Caption className="carousel-caption">
              <p className="carousel-caption-title">
                RSV: When It's More Than Just A Cold
              </p>
              <p className="carousel-caption-desc">
                Almost All Babies Get RSV Atleast Once Before They Are 2, Some
                Get Very Sick
              </p>
              <Button className="carousel-caption-button">Read More</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row id="age-title-row">
        <div id="age-title-div">
          <p id="age-title">We Provide Care For</p>
        </div>
      </Row>
      <Row id="agerange-row">
        <Col>
          <Card className="age-card">
            <Card.Img variant="top" src="/woman.svg" className="age-image" />
            <Card.Body className="age-body">
              <Card.Title className="age-title">Prenatel</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="age-card">
            <Card.Img variant="top" src="/baby.svg" className="age-image" />
            <Card.Body className="age-body">
              <Card.Title className="age-title">Baby</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="age-card">
            <Card.Img variant="top" src="/baby-boy.svg" className="age-image" />
            <Card.Body className="age-body">
              <Card.Title className="age-title">Toddler</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="age-card">
            <Card.Img variant="top" src="/abacus.svg" className="age-image" />
            <Card.Body className="age-body">
              <Card.Title className="age-title">Preschool</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="age-card">
            <Card.Img variant="top" src="/write.svg" className="age-image" />
            <Card.Body className="age-body">
              <Card.Title className="age-title">Grade School</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="age-card">
            <Card.Img variant="top" src="/teen.svg" className="age-image" />
            <Card.Body className="age-body">
              <Card.Title className="age-title">Teen</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="age-card">
            <Card.Img variant="top" src="/female.svg" className="age-image" />
            <Card.Body className="age-body">
              <Card.Title className="age-title">Young Adult</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row id="age-title-row">
        <div id="age-title-div">
          <p id="age-title">Common Questions</p>
        </div>
      </Row>
      <Row id="articles-row">
        <Col>
          <Card className="articles-card">
            <Card.Img
              variant="top"
              src="/covid-19.svg"
              className="articles-image"
            />
            <Card.Body className="articles-body">
              <Card.Title className="articles-title">COVID Vaccines</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="articles-card">
            <Card.Img variant="top" src="/gun.svg" className="articles-image" />
            <Card.Body className="articles-body">
              <Card.Title className="articles-title">Guns At Home</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="articles-card">
            <Card.Img variant="top" src="/man.svg" className="articles-image" />
            <Card.Body className="articles-body">
              <Card.Title className="articles-title">
                Long Haul COVID
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="articles-card">
            <Card.Img
              variant="top"
              src="/sick_baby.svg"
              className="articles-image"
            />
            <Card.Body className="articles-body">
              <Card.Title className="articles-title">SIDS Q and A</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="articles-card">
            <Card.Img
              variant="top"
              src="/hotel.svg"
              className="articles-image"
            />
            <Card.Body className="articles-body">
              <Card.Title className="articles-title">Hotel Safety</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="articles-card">
            <Card.Img
              variant="top"
              src="/sore-throat.svg"
              className="articles-image"
            />
            <Card.Body className="articles-body">
              <Card.Title className="articles-title">Group A Strep</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="articles-card">
            <Card.Img
              variant="top"
              src="/stress.svg"
              className="articles-image"
            />
            <Card.Body className="articles-body">
              <Card.Title className="articles-title">
                Suicide Prevention
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row id="registerlogin-row">
        <Row id="registerlogin-title-row">
          <p id="registerlogin-row-title">Join To Receive Free Newsletters</p>
        </Row>
        <Row id="registerlogin-buttons-row">
          <Col className="registerlogin-col">
            <p className="registerlogin-title">New To Little Giraffe Center?</p>
            <Button
              className="registerlogin-button"
              onClick={() => {
                window.location.href = "/register";
              }}
            >
              Register
            </Button>
            <p className="registerlogin-subtext">
              Register now to recieve our e-newsletter.
            </p>
          </Col>
          <Col className="registerlogin-col">
            <p className="registerlogin-title">Already Registered?</p>
            <Button
              className="registerlogin-button"
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Login
            </Button>
            <p className="registerlogin-subtext">
              Login For Personalized Content
            </p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
