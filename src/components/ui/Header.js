import styled from "styled-components";
const H1 = styled.h1`
  font-style: ${(props) => props.theme.h1.fontStyle};
  font-family: ${(props) => props.theme.h1.fontFamily};
  font-weight: ${(props) => props.theme.h1.fontWeight};
  font-size: ${(props) => props.theme.h1.fontSize};
  line-height: ${(props) => props.theme.h1.lineHeight};
  color: ${(props) => props.theme.h1.color};
`;
const H2 = styled.h2`
  font-style: ${(props) => props.theme.h2.fontStyle};
  font-family: ${(props) => props.theme.h2.fontFamily};
  font-weight: ${(props) => props.theme.h2.fontWeight};
  font-size: ${(props) => props.theme.h2.fontSize};
  line-height: ${(props) => props.theme.h2.lineHeight};
  color: ${(props) => props.theme.h2.color};
`;
const H2black = styled.h2`
  font-style: ${(props) => props.theme.h2black.fontStyle};
  font-family: ${(props) => props.theme.h2black.fontFamily};
  font-weight: ${(props) => props.theme.h2black.fontWeight};
  font-size: ${(props) => props.theme.h2black.fontSize};
  line-height: ${(props) => props.theme.h2black.lineHeight};
  color: ${(props) => props.theme.h2black.color};
`;

export default function Header({ children, variant }) {
  if (variant === "h1") {
    return <H1>{children}</H1>;
  } else if (variant === "h2") {
    return <H2>{children}</H2>;
  } else if (variant === "h2black") {
    return <H2black>{children}</H2black>;
  }
  return <h1>not configured properly!</h1>;
}
