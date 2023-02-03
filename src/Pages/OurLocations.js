import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import OurLocationsBody from "./OurLocationsBody";

export default class OurLocations extends React.Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    document.title = "Our Locations | Little Giraffe Center";
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;

    if (!loaded) return null;
    else
      return (
        <div>
          <Header current_page={"ourlocations"} />
          <OurLocationsBody />
          <Footer />
        </div>
      );
  }
}
