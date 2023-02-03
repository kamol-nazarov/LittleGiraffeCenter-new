import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import AboutUsBody from "./AboutUsBody";

export default class AboutUs extends React.Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    document.title = "About Us | Little Giraffe Center";
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;

    if (!loaded) return null;
    else
      return (
        <div>
          <Header current_page={"aboutus"} />
          <AboutUsBody />
          <Footer />
        </div>
      );
  }
}
