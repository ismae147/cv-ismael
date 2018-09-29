import React, { Component } from 'react'
import MainInformation from "./MainInformation";
import Header from "./shared/Header/";

export default class Content extends Component {
  render() {
    return (
      <div>
        <Header title="Ismael"/>
        <MainInformation />
      </div>
    )
  }
}
