import { Text } from "../helpers";
import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  height: 10rem;
  align-items: center;
  background: transparent;
`;

export const TextCustom = styled(Text)`
  position: relative;
  text-indent: -3px;
  user-select: none;
  background: linear-gradient(
    to right,
    var(--thirtyColor) 0%,
    var(--secondaryColor) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:before {
    height: 0.2rem;
    width: 25%;
    content: "";
    position: absolute;
    background: linear-gradient(
      to right,
      var(--thirtyColor) 0%,
      var(--secondaryColor) 100%
    );
    bottom: 0.5rem;
    left: 0;
    transition: all 0.5s;
  }
  &:hover {
    &:before {
      width: 100%;
    }
    &:after {
      width: 100%;
    }
  }
  &:after {
    height: 0.2rem;
    width: 25%;
    content: "";
    position: absolute;
    background: linear-gradient(
      to right,
      var(--thirtyColor) 0%,
      var(--secondaryColor) 100%
    );
    top: 0.2rem;
    right: 0;
    transition: all 0.5s;
  }
`;

export const LenguageItem = styled.span`
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
