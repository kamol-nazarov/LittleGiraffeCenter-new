import { Container, Row } from "react-bootstrap";

export default function CardiacArrestArticleBody(props) {
  return (
    <Container fluid id="obesityarticle-container">
      <p id="obesityarticle-title">Sudden Cardiac Arrest In Young People</p>
      <Row id="obesityarticle-row-one">
        <img
          src="/cardiac_arrest_image_1.svg"
          alt=""
          className="obesity-image"
        />
        <div className="obesity-div">
          <p className="obesity-div-title">
            Understanding Sudden Cardiac Arrest in Young People
          </p>
          <p className="obesity-div-desc">
            Sudden cardiac arrest (SCA) in young people is a rare but serious
            condition that can happen without warning. It occurs when the heart
            suddenly stops beating and can lead to death if not treated
            immediately. SCA is not the same as a heart attack, which is caused
            by a blockage in the blood flow to the heart. While SCA is uncommon
            in young people, it's important for families to be aware of the
            signs and risk factors and know how to respond in an emergency.
          </p>
        </div>
      </Row>
      <Row id="obesityarticle-row-two">
        <img
          src="/cardiac_arrest_image_2.svg"
          alt=""
          className="obesity-image"
        />
        <div className="obesity-div">
          <p className="obesity-div-title">Recognizing the Signs of SCA</p>
          <p className="obesity-div-desc">
            Recognizing the signs of SCA is crucial for families and can help
            save a life in an emergency. Common signs of SCA include sudden
            collapse, loss of consciousness, and no pulse or normal heartbeat.
            In some cases, SCA may also be accompanied by chest pain, shortness
            of breath, or rapid or irregular heartbeats. If you suspect someone
            is experiencing SCA, it's important to call 911 immediately and
            start CPR if trained to do so.
          </p>
        </div>
      </Row>
      <Row id="obesityarticle-row-three">
        <img
          src="/cardiac_arrest_image_3.svg"
          alt=""
          className="obesity-image"
        />
        <div className="obesity-div">
          <p className="obesity-div-title">
            Reducing the Risk of SCA in Young People
          </p>
          <p className="obesity-div-desc">
            Reducing the risk of SCA in young people involves a combination of
            regular check-ups, lifestyle changes, and education. Regular
            check-ups with a healthcare provider can help identify any
            underlying heart conditions that may increase the risk of SCA.
            Living a healthy lifestyle, including regular physical activity and
            a balanced diet, can also help reduce the risk of SCA. Additionally,
            families should educate themselves and their children on SCA and
            what to do in an emergency. By taking these steps, families can help
            reduce the risk of SCA and ensure the health and well-being of their
            loved ones.
          </p>
        </div>
      </Row>
    </Container>
  );
}
