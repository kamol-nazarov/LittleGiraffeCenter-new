import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import RSVArticleBody from "./RSVArticleBody";

export default class RSVArticle extends React.Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    document.title = "RSV | Little Giraffe Center";
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;

    if (!loaded) return null;
    else
      return (
        <div>
          <Header current_page={"article"} />
          <RSVArticleBody />
          <Footer />
        </div>
      );
  }
}
