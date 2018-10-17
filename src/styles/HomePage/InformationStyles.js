import styled from "styled-components";
import { Text } from "../helpers";

export const BoxInformation = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: calc(100vh - 10rem);
  background-image: url("./img/me.png");
  background-size: auto 90%;
  background-repeat: no-repeat;
  background-position-x: 101%;
  background-position-y: 123%;
  align-items: center;
`;

export const InformationStyle = styled.div`
  display: flex;
`;

export const TextPaimted = styled(Text)`
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

export const TextDescription = styled(Text)`
  width: 45%;
`;
