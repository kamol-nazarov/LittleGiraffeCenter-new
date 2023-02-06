import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import ParentingGoalsBody from "./ParentingGoalsBody";

export default class ParentingGoals extends React.Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    document.title = "Parenting Goals | Little Giraffe Center";
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;

    if (!loaded) return null;
    else
      return (
        <div>
          <Header current_page={"article"} />
          <ParentingGoalsBody />
          <Footer />
        </div>
      );
  }
}
