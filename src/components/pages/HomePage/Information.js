import React, { Component } from "react";

import Moment from "moment";
import { Wrap, Text } from "../../../styles/helpers";
import { translate, Trans } from "react-i18next";

import {
  BoxInformation,
  InformationStyle,
  TextPaimted,
  Description
} from "../../../styles/HomePage/InformationStyles";

class Information extends Component {
  render() {
    /* const age = Math.abs(Moment().diff(Moment("1997-03-18"), "years")); */
    const { t } = this.props;
    console.log(this.props);
    return (
      <BoxInformation>
        <Wrap
          style={{
            zIndex: 1
          }}>
          <InformationStyle>
            <Wrap>
              <TextPaimted
                fontFamily="Roboto, san-serif"
                bold
                colors={["var(--thirtyColor)", "var(--secondaryColor)"]}>
                <Trans>Hi, I'm Ismael</Trans>
              </TextPaimted>
              <Description>
                <Text big bold>
                  {t("textInformation1")}
                </Text>
              </Description>
            </Wrap>
          </InformationStyle>
        </Wrap>
      </BoxInformation>
    );
  }
}

export default translate("HomePage")(Information);
