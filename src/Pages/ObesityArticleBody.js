import { Container, Row } from "react-bootstrap";

export default function ObesityArticleBody(props) {
  return (
    <Container fluid id="obesityarticle-container">
      <p id="obesityarticle-title">Childhood Obesity</p>
      <Row id="obesityarticle-row-one">
        <img
          src="/childhood_obesity_image_1.svg"
          alt=""
          className="obesity-image"
        />
        <div className="obesity-div">
          <p className="obesity-div-title">Introduction to Childhood Obesity</p>
          <p className="obesity-div-desc">
            Childhood obesity is a growing concern among parents and healthcare
            professionals globally. It refers to an excessive amount of body fat
            in children and adolescents, which puts them at an increased risk of
            various health problems, including diabetes, heart disease, and
            joint problems. The prevalence of childhood obesity has doubled in
            the last 30 years, affecting millions of children and teenagers
            worldwide. In this article, we will delve into the causes, effects,
            and ways to prevent childhood obesity.
          </p>
        </div>
      </Row>
      <Row id="obesityarticle-row-two">
        <img
          src="/childhood_obesity_image_2.svg"
          alt=""
          className="obesity-image"
        />
        <div className="obesity-div">
          <p className="obesity-div-title">Causes of Childhood Obesity</p>
          <p className="obesity-div-desc">
            There are several factors that contribute to the development of
            childhood obesity, including genetics, unhealthy eating habits,
            sedentary lifestyles, and lack of physical activity. Unhealthy
            diets, which are high in calorie-dense, low-nutrient foods, and
            sugary drinks, are a significant contributor to the rise in
            childhood obesity. In addition, technology has played a significant
            role in reducing physical activity among children and adolescents,
            with an increased focus on screen time and decreased focus on
            outdoor play. Lack of access to healthy food options and limited
            physical activity opportunities can also lead to the development of
            childhood obesity.
          </p>
        </div>
      </Row>
      <Row id="obesityarticle-row-three">
        <img
          src="/childhood_obesity_image_3.svg"
          alt=""
          className="obesity-image"
        />
        <div className="obesity-div">
          <p className="obesity-div-title">Preventing Childhood Obesity</p>
          <p className="obesity-div-desc">
            Preventing childhood obesity requires a multi-faceted approach that
            includes a combination of lifestyle changes, community initiatives,
            and policy changes. Families can encourage healthy eating habits by
            providing children with nutritious meals and snacks and reducing
            their exposure to sugary drinks and high-calorie foods. Regular
            physical activity, such as outdoor play and sports, can also help
            prevent childhood obesity. Schools and communities can provide safe
            and accessible spaces for children to be physically active and
            engage in physical education programs. Policy changes, such as
            implementing taxes on sugary drinks, can also help reduce childhood
            obesity rates. By taking a proactive approach, we can help prevent
            childhood obesity and ensure that children have the opportunity to
            grow into healthy adults.
          </p>
        </div>
      </Row>
    </Container>
  );
}
