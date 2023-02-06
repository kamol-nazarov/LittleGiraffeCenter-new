import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import ObesityArticleBody from "./ObesityArticleBody";

export default class ObesityArticle extends React.Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    document.title = "Childhood Obesity | Little Giraffe Center";
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;

    if (!loaded) return null;
    else
      return (
        <div>
          <Header current_page={"article"} />
          <ObesityArticleBody />
          <Footer />
        </div>
      );
  }
}
