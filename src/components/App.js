import React, { Component } from "react";
import Content from "./Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="particle-container">
          <div className="particle2"></div>
          <div className="particle2"></div>
          <div className="particle2"></div>
          <div className="particle2"></div>
          <div className="particle2"></div>
          <div className="particle2"></div>
          <div className="particle2"></div>
          <div className="particle2"></div>
          <div className="particle2"></div>
          <div className="particle2"></div>
        </div>
        <Content />
      </div>
    );
  }
}

export default App;
