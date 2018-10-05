import React, { Component } from "react";
import { translate } from "react-i18next";
import Information from "./Information";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Information />
      </div>
    );
  }
}

export default translate("HomePage")(HomePage);
