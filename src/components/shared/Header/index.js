import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Wrap} from '../helpers';

const Div = styled.div`
  display: flex;
  height: 8rem;
  align-items: center;  
  font-size: 3rem;
  background-color: white;
`;

const Title = styled.div``;

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <Div>
        <Wrap>
          <Title>{this.props.title}</Title>
        </Wrap>
      </Div>
    );
  }
}
