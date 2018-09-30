import React, { Component } from "react";
import { Wrap, Text, Div, Flex } from "./shared/helpers";
import styled from "styled-components";
import { translate, Trans } from "react-i18next";

export const BoxInformation = styled.div`
  padding: 5rem 0;
  display: grid;
  position: relative;
  background-image: url("./img/gravel.png");
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to right, var(--primaryColor) 0%, rgba(65, 76, 112,.7) 100%);
  }
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
        <Wrap style={{
          zIndex: 1
        }}>
          <Information>
            <Div>
              <ImageProfile />
            </Div>
            <Div>
              <Text biggest color="white">
                Ismael Cortegana Malla
              </Text>
              <Flex />
            </Div>
          </Information>
        </Wrap>
      </BoxInformation>
    );
  }
}

export default translate("translations")(MainInformation);