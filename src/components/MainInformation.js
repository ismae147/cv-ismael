import React, { Component } from "react";
import { Wrap, Text, Div } from "./shared/helpers";
import { Flex } from "../theme/grid";
import styled from "styled-components";
import { translate, Trans } from "react-i18next";
import Moment from "moment";

const BoxInformation = styled.div`
  padding: 15rem 0;
  display: grid;
  position: relative;
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

const TextPaimted = styled(Text)`
  background: linear-gradient(
    to right,
    ${props => props.colors[0]} 0%,
    ${props => props.colors[1]} 100%
  );
  font-size: 10rem;
  user-select: none;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  width: 60%;
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
            <Wrap>
              <TextPaimted
                fontFamily="Roboto, san-serif"
                bold
                colors={["var(--thirtyColor)", "var(--secondaryColor)"]}>
                <Trans>Hi, I'm Ismael</Trans>
              </TextPaimted>
              <Description>
                <Text fontFamily="'Playfair Display', serif" big bold>
                  Ven y llama a mi puerta, estaré muy feliz de ser tu compañero,
                  y hagamos algo grandioso juntos.
                </Text>
              </Description>
            </Wrap>
          </Information>
        </Wrap>
      </BoxInformation>
    );
  }
}

export default translate("MainInformation")(MainInformation);
