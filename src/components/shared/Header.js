import React, { Component } from "react";
import PropTypes from "prop-types";

/* Custom components */
import { Wrap } from "../../styles/helpers";
import { Flex } from "../../styles/grid";
import { translate } from "react-i18next";
import {
  Div,
  TextCustom,
  LenguageItem
} from "../../styles/shared/HeaderStyles";

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const { i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <Div>
        <Wrap>
          <Flex justify="space-between">
            <Div>
              <TextCustom
                biggest
                fontFamily="'Expletus Sans', cursive"
                weight="700">
                {this.props.title}
              </TextCustom>
            </Div>
            <Div>
              <LenguageItem
                onClick={() => {
                  changeLanguage("es");
                }}>
                ES{" "}
              </LenguageItem>{" "}
              <LenguageItem
                onClick={() => {
                  changeLanguage("en");
                }}>
                {" "}
                EN{" "}
              </LenguageItem>
            </Div>
          </Flex>
        </Wrap>
      </Div>
    );
  }
}

export default translate("HomePage")(Header);
