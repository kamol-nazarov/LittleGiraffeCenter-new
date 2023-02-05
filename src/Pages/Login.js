import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import LoginBody from "./LoginBody";

export default class Login extends React.Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    document.title = "Login | Little Giraffe Center";
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;

    if (!loaded) return null;
    else
      return (
        <div>
          <Header current_page={"login"} />
          <LoginBody />
          <Footer />
        </div>
      );
  }
}
