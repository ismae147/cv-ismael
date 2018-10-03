import styled from "styled-components";
import media from "./../../theme/media";

export const Wrap = styled.div`
  max-width: 80%;
  width: 100%;
  margin: 0 auto;

  ${media.tablet`
     max-width: 90%;
  `};
`;

export const Box = styled.div`
  box-shadow: 0 0 5px 1px var(--borderColor);
  padding: 2rem;
  background-color: white;
`;

export const Div = styled.div`
`;

export const Text = styled.p`
  font-family: ${props => (props.fontFamily?props.fontFamily:'inherit')};
  font-size: ${props =>
    props.biggest
      ? "3.6rem"
      : props.bigger
        ? "2.4rem"
        : props.big
          ? "2rem"
          : props.normal
            ? "1.6rem"
            : props.small
              ? "1.4rem"
              : props.smaller
                ? "1.2rem"
                : "1.6rem"};
  color: ${props =>
    props.primary
      ? "var(--primaryColor)"
      : props.secondaryColor
        ? "var(--secondaryColor)"
        : props.thirtyColor
          ? "var(--thirtyColor)"
          : props.borderColor
            ? "var(--borderColor)"
            : props.grayColor
              ? "var(--grayColor)"
              : props.color};
  font-weight: ${props =>
    props.bold
      ? "bold"
      : props.normal
        ? "normal"
        : props.weight
          ? props.weight
          : "normal"};
`;
