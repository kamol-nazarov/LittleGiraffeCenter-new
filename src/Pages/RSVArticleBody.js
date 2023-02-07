import { Container, Row } from "react-bootstrap";

export default function RSVArticleBody(props) {
  return (
    <Container fluid id="obesityarticle-container">
      <p id="obesityarticle-title">RSV: When It's More Than A Cold</p>
      <Row id="obesityarticle-row-one">
        <img src="/rsv_article_image_1.svg" alt="" className="obesity-image" />
        <div className="obesity-div">
          <p className="obesity-div-title">
            Understanding RSV: Symptoms and Causes
          </p>
          <p className="obesity-div-desc">
            RSV, or respiratory syncytial virus, is a highly contagious
            respiratory illness that is common in young children and infants. It
            can cause symptoms similar to a cold, such as runny nose, cough, and
            low-grade fever, but can also lead to severe complications, such as
            bronchiolitis or pneumonia. It is important to know the signs and
            symptoms of RSV in order to seek proper medical treatment if
            necessary.
          </p>
        </div>
      </Row>
      <Row id="obesityarticle-row-two">
        <img src="/rsv_article_image_2.svg" alt="" className="obesity-image" />
        <div className="obesity-div">
          <p className="obesity-div-title">Diagnosing and Treating RSV</p>
          <p className="obesity-div-desc">
            Diagnosing RSV can be difficult as it presents similar symptoms to
            other respiratory illnesses, such as the common cold. However, a
            healthcare provider may perform tests such as a rapid antigen test
            or a viral culture to confirm the diagnosis. Treatment for RSV is
            primarily supportive, focusing on relieving symptoms, maintaining
            hydration, and preventing the spread of the virus to others. In
            severe cases, hospitalization may be necessary.
          </p>
        </div>
      </Row>
      <Row id="obesityarticle-row-three">
        <img src="/rsv_article_image_3.svg" alt="" className="obesity-image" />
        <div className="obesity-div">
          <p className="obesity-div-title">
            Preventing RSV in Children and Infants
          </p>
          <p className="obesity-div-desc">
            Preventing RSV is important, especially in young children and
            infants who are at a higher risk of severe complications. Simple
            measures, such as washing hands frequently, avoiding close contact
            with people who are sick, and disinfecting frequently touched
            surfaces can help reduce the spread of the virus. Vaccines are
            currently not available for RSV, but research is ongoing in this
            area. It is also recommended that children and infants receive their
            recommended vaccinations, such as the flu shot, to help reduce their
            risk of respiratory illnesses.
          </p>
        </div>
      </Row>
    </Container>
  );
}
