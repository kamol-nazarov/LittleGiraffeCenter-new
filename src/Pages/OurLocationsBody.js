import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function OurLocationsBody() {
  const [location, setLocation] = useState("");

  return (
    <Container fluid id="ourlocations-container">
      <Row id="ourlocations-title-row">
        <p id="ourlocations-title">Find Us At </p>
      </Row>
      <Row id="ourlocations-map-row">
        <Col id="ourlocation-col-one">
          <div
            className="location-div"
            onClick={() => {
              setLocation("first");
            }}
          >
            <p className="location">7524 3rd Avenue Brooklyn, NY 11209</p>
            <ul className="location-hour-list">
              <li className="location-hour">Mon - Thurs: 8am - 8pm</li>
              <li className="location-hour">Fri: 8am - 5pm</li>
              <li className="location-hour">Sun: Closed</li>
            </ul>
          </div>
          <div
            className="location-div"
            onClick={() => {
              setLocation("second");
            }}
          >
            <p className="location">
              1100 Clove Road, Suite GC Staten Island, NY 10301
            </p>
            <ul className="location-hour-list">
              <li className="location-hour">Mon - Thurs: 8am - 8pm</li>
              <li className="location-hour">Fri: 8am - 5pm</li>
              <li className="location-hour">Sun: Closed</li>
            </ul>
          </div>
          <div
            className="location-div"
            onClick={() => {
              setLocation("third");
            }}
          >
            <p className="location">
              236 Richmond Valley Road Staten Island, NY 10309
            </p>
            <ul className="location-hour-list">
              <li className="location-hour">Mon - Thurs: 8am - 8pm</li>
              <li className="location-hour">Fri: 8am - 5pm</li>
              <li className="location-hour">Sun: Closed</li>
            </ul>
          </div>
        </Col>
        <Col id="ourlocations-map-col">
          {location === "first" && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.9540799614433!2d-74.03048038432807!3d40.63089465050983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245584517b35d%3A0x20438070f1d63065!2s7542%203rd%20Ave%2C%20Brooklyn%2C%20NY%2011209!5e0!3m2!1sen!2sus!4v1674870121769!5m2!1sen!2sus"
              loading="lazy"
              title="map"
              referrerpolicy="no-referrer-when-downgrade"
              className="map"
            ></iframe>
          )}

          {location === "second" && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.4889018369904!2d-74.10963338432833!3d40.61909885123033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24f0d7f033279%3A0xea7c4e949cd1a81e!2sT.L.C.%20Physical%20Therapy!5e0!3m2!1sen!2sus!4v1674936424912!5m2!1sen!2sus"
              loading="lazy"
              title="map"
              referrerpolicy="no-referrer-when-downgrade"
              className="map"
            ></iframe>
          )}

          {location === "third" && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.9553715951984!2d-74.23681289999999!3d40.5204775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b55c671494eb%3A0x3be7db7cb0afdd2!2s236%20Richmond%20Valley%20Rd%2C%20Staten%20Island%2C%20NY%2010309!5e0!3m2!1sen!2sus!4v1674936596478!5m2!1sen!2sus"
              loading="lazy"
              title="map"
              referrerpolicy="no-referrer-when-downgrade"
              className="map"
            ></iframe>
          )}
        </Col>
      </Row>
    </Container>
  );
}
