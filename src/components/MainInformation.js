import React, { Component } from "react";
import { Wrap, Text, Div, Flex } from "./shared/helpers";
import styled from "styled-components";

export const BoxInformation = styled.div`
  padding: 5rem 0;
  display: grid;
  background: #005bea;
  background: #000000;
  background: -moz-linear-gradient(to right, #000000 0%, #0a1852 100%);
  background: -webkit-linear-gradient(to right, #000000 0%, #0a1852 100%);
  background: linear-gradient(to right, #000000 0%, #0a1852 100%);
`;

export const ImageProfile = styled.img`
  --sizeImageProfile: 15rem;
  width: var(--sizeImageProfile);
  background-image: URL("./img/me.jpg");
  background-size: var(--sizeImageProfile);
  height: var(--sizeImageProfile);
  background-position: center;
  border-radius: 50%;
  box-shadow: 0 0 22px 0px rgba(0, 0, 0, 0.5);
`;

export const Information = styled.div`
  display: flex;
`;


class MainInformation extends Component {
  render() {
    return (
      <BoxInformation>
        <Wrap>
          <Information>
            <Div>
              <ImageProfile />
            </Div>
            <Div>
              <Text biggest color="white">Ismael Cortegana Malla</Text>
              <Flex>
                
              </Flex>
            </Div>
          </Information>
        </Wrap>
      </BoxInformation>
    );
  }
}

export default MainInformation;