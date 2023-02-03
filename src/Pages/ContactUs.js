import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import ContactUsBody from "./ContactUsBody";

export default class ContactUs extends React.Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    document.title = "Contact Us | Little Giraffe Center";
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;

    if (!loaded) return null;
    else
      return (
        <div>
          <Header current_page={"contactus"} />
          <ContactUsBody />
          <Footer />
        </div>
      );
  }
}
