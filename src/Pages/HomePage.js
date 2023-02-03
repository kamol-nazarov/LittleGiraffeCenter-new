import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import HomePageBody from "./HomePageBody";

export default class HomePage extends React.Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    document.title = "Home | Little Giraffe Center";
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;

    if (!loaded) return null;
    else
      return (
        <div>
          <Header current_page={"home"} />
          <HomePageBody />
          <Footer />
        </div>
      );
  }
}
