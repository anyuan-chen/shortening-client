import styled from "styled-components";
const F1 = styled.p`
  font-style: ${(props) => props.theme.f1.fontStyle};
  font-family: ${(props) => props.theme.f1.fontFamily};
  font-weight: ${(props) => props.theme.f1.fontWeight};
  font-size: ${(props) => props.theme.f1.fontSize};
  line-height: ${(props) => props.theme.f1.lineHeight};
  color: ${(props) => props.theme.f1.color};
`;

const T1 = styled.p`
  font-style: ${(props) => props.theme.t1.fontStyle};
  font-family: ${(props) => props.theme.t1.fontFamily};
  font-weight: ${(props) => props.theme.t1.fontWeight};
  font-size: ${(props) => props.theme.t1.fontSize};
  line-height: ${(props) => props.theme.t1.lineHeight};
  color: ${(props) => props.theme.t1.color};
`;

const T2 = styled.p`
  font-style: ${(props) => props.theme.t2.fontStyle};
  font-family: ${(props) => props.theme.t2.fontFamily};
  font-weight: ${(props) => props.theme.t2.fontWeight};
  font-size: ${(props) => props.theme.t2.fontSize};
  line-height: ${(props) => props.theme.t2.lineHeight};
  color: ${(props) => props.theme.t2.color};
`;

export default function Text({ children, variant }) {
  if (variant === "f1") {
    return <F1>{children}</F1>;
  } else if (variant === "t1") {
    return <T1>{children}</T1>;
  } else if (variant === "t2"){
      return <T2>{children}</T2>
  }
  return <f1>not configured properly!</f1>;
}
