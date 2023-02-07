import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import FeverMedicineArticleBody from "./FeverMedicineArticleBody";

export default class FeverMedicineArticle extends React.Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    document.title = "Fever Medicine | Little Giraffe Center";
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;

    if (!loaded) return null;
    else
      return (
        <div>
          <Header current_page={"article"} />
          <FeverMedicineArticleBody />
          <Footer />
        </div>
      );
  }
}
