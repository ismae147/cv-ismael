import React, { Component } from "react";
import { Wrap, Box } from "./shared/helpers";
import styled from "styled-components";

export const BoxInformation = styled(Box)`
  margin: 5rem 0;
`;

export default class MainInformation extends Component {
  render() {
    return (
      <Wrap>
        <BoxInformation>Mi informacion siono :'v'</BoxInformation>
      </Wrap>
    );
  }
}
