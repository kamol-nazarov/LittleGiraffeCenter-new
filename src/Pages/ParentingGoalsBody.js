import { Container, Row } from "react-bootstrap";

export default function ParentingGoalsBody(props) {
  return (
    <Container fluid id="obesityarticle-container">
      <p id="obesityarticle-title">Parenting Goals For The New Year!</p>
      <Row id="obesityarticle-row-one">
        <img
          src="/images/parenting_goals_image_1.svg"
          alt=""
          className="obesity-image"
        />
        <div className="obesity-div">
          <p className="obesity-div-title">Setting Realistic Parenting Goals</p>
          <p className="obesity-div-desc">
            Starting the new year strong means setting realistic and achievable
            parenting goals. It's essential to avoid overloading yourself with
            expectations that are too high and can cause stress and frustration.
            Consider setting goals that align with your values and family needs.
            For instance, you can focus on spending more quality time with your
            kids, reducing screen time, or establishing better communication.
            Write down your goals and break them down into smaller, manageable
            steps to make the process more manageable.
          </p>
        </div>
      </Row>
      <Row id="obesityarticle-row-two">
        <img
          src="/images/parenting_goals_image_2.svg"
          alt=""
          className="obesity-image"
        />
        <div className="obesity-div">
          <p className="obesity-div-title">Building Strong Family Habits</p>
          <p className="obesity-div-desc">
            Building strong family habits is an essential aspect of parenting.
            The new year is a perfect time to start new routines and establish
            healthier habits for the whole family. For example, you can start a
            weekly family meal or create a bedtime routine that promotes better
            sleep and reduces screen time. Encouraging physical activity, such
            as going for walks or playing sports together, can also help build
            healthy habits and strengthen family bonds.
          </p>
        </div>
      </Row>
      <Row id="obesityarticle-row-three">
        <img
          src="/images/parenting_goals_image_3.svg"
          alt=""
          className="obesity-image"
        />
        <div className="obesity-div">
          <p className="obesity-div-title">Prioritizing Self-Care</p>
          <p className="obesity-div-desc">
            Starting the new year strong means prioritizing self-care as a
            parent. It can be easy to get caught up in the demands of daily
            life, but taking care of yourself is essential to your physical,
            mental, and emotional well-being. Make time for activities that
            bring you joy and relaxation, whether it's reading, exercising, or
            spending time with friends. By taking care of yourself, you'll be
            better equipped to handle the challenges of parenting and provide
            the best possible care for your family.
          </p>
        </div>
      </Row>
    </Container>
  );
}
