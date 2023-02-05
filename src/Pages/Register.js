import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import RegisterBody from "./RegisterBody";

export default class Register extends React.Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    document.title = "Register | Little Giraffe Center";
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;

    if (!loaded) return null;
    else
      return (
        <div>
          <Header current_page={"register"} />
          <RegisterBody />
          <Footer />
        </div>
      );
  }
}
