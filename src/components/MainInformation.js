import React, { Component } from "react";
import { Wrap, Text, Div } from "./shared/helpers";
import { Flex } from "../theme/grid";
import styled from "styled-components";
import { translate, Trans } from "react-i18next";
import Moment from "moment";

const BoxInformation = styled.div`
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
    background: linear-gradient(
      to right,
      var(--primaryColor) 0%,
      rgba(65, 76, 112, 0.7) 100%
    );
  }
`;

const ImageProfile = styled.img`
  --sizeImageProfile: 15rem;
  width: var(--sizeImageProfile);
  background-image: URL("./img/me.jpg");
  background-size: var(--sizeImageProfile);
  height: var(--sizeImageProfile);
  background-position: center;
  border-radius: 50%;
  box-shadow: 0 0 22px 0px rgba(0, 0, 0, 0.5);
`;

const Information = styled.div`
  display: flex;
`;

class MainInformation extends Component {
  render() {
    const age = Math.abs(Moment().diff(Moment("1997-03-18"), "years"));

    return (
      <BoxInformation>
        <Wrap
          style={{
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
              <Flex>
                <Flex>
                  <Text normal bold color="white">
                    <Trans>Born</Trans>
                    {': '}
                  </Text>
                  <Text normal color="white">
                    <Trans age={age}>March 18, 1997 (age {{age}})</Trans>
                  </Text>
                </Flex>
              </Flex>
            </Div>
          </Information>
        </Wrap>
      </BoxInformation>
    );
  }
}

export default translate("MainInformation")(MainInformation);
