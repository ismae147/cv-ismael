import styled from "styled-components";
import { Text } from "../helpers";

export const BoxInformation = styled.div`
  padding: 15rem 0;
  display: grid;
  position: relative;
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

export const Description = styled.p`
  width: 45%;
`;
