import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import CardiacArrestArticleBody from "./CardiacArrestArticleBody";

export default class CardiacArrestArticle extends React.Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    document.title = "Cardiac Arrest In Young People | Little Giraffe Center";
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;

    if (!loaded) return null;
    else
      return (
        <div>
          <Header current_page={"article"} />
          <CardiacArrestArticleBody />
          <Footer />
        </div>
      );
  }
}
