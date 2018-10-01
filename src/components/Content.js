import React, { Component } from "react";
import MainInformation from "./MainInformation";
import Header from "./shared/Header/";
import styled from "styled-components";

const Main = styled.div`
  background: #FAFBFC;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
  height: 80vh;
  background-image: url("./img/me.png");
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position-x: 101%
  box-shadow: inset 0 0 20px 10px #D9D2D5;
`;

export default class Content extends Component {
  render() {
    return (
      <div>
        <Main>
          <Header title="DevCore" />
          <MainInformation />
        </Main>
      </div>
    );
  }
}
