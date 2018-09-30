import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Wrap, Text } from "../helpers";
import { Flex } from "./../../../theme/grid";
import { translate } from "react-i18next";

const Div = styled.div`
  display: flex;
  height: 8rem;
  align-items: center;
  background-color: white;
`;

const Title = styled.div`
  font-size: 3rem;
`;

const LenguageItem = styled.span`
  position: relative;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:first-child {
    margin-right: 2rem;
    &::before {
      content: "";
      height: 80%;
      width: 1px;
      box-shadow: 0 0 20px 2px var(--primaryColor);
      background-color: var(--primaryColor);
      position: absolute;
      top: 50%;
      right: -2rem;
      transform: translateY(-50%);
    }
  }
  &:last-child {
    margin-left: 2rem;
  }
`;

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const { t, i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <Div>
        <Wrap>
          <Flex justify="space-between">
            <Div>
              <Text biggest>{this.props.title}</Text>
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

export default translate("MainInformation")(Header);
