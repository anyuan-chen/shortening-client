import styled from "styled-components";
const F1 = styled.p`
  font-style: ${(props) => props.theme.f1.fontStyle};
  font-family: ${(props) => props.theme.f1.fontFamily};
  font-weight: ${(props) => props.theme.f1.fontWeight};
  font-size: ${(props) => props.theme.f1.fontSize};
  line-height: ${(props) => props.theme.f1.lineHeight};
  color: ${(props) => props.theme.f1.color};
`;

export default function Text({ children, variant }) {
  if (variant === "f1") {
    return <F1>{children}</F1>;
  }
  return <f1>not configured properly!</f1>;
}
