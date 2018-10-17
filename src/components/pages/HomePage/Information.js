import React, { Component } from "react";
import { Wrap } from "../../../styles/helpers";
import { translate, Trans } from "react-i18next";

import {
  BoxInformation,
  TextPaimted,
  TextDescription
} from "../../../styles/HomePage/InformationStyles";

class Information extends Component {
  render() {
    /* const age = Math.abs(Moment().diff(Moment("1997-03-18"), "years")); */
    const { t } = this.props;
    return (
      <BoxInformation>
        <Wrap>
          <TextPaimted
            fontFamily="Roboto, san-serif"
            bold
            colors={["var(--thirtyColor)", "var(--secondaryColor)"]}>
            <Trans>Hi, I'm Ismael</Trans>
          </TextPaimted>
          <TextDescription big bold>
            {t("textInformation1")}
          </TextDescription>
        </Wrap>
      </BoxInformation>
    );
  }
}

export default translate("HomePage")(Information);
