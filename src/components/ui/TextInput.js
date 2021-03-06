import styled from "styled-components";

const Large = styled.input`
  font-style: ${(props) => props.theme.f1.fontStyle};
  font-family: ${(props) => props.theme.f1.fontFamily};
  font-weight: ${(props) => props.theme.f1.fontWeight};
  font-size: ${(props) => props.theme.f1.fontSize};
  line-height: ${(props) => props.theme.f1.lineHeight};
  color: ${(props) => props.theme.f1.color};
  padding-top: 1.4rem;
  padding-bottom: 1.2rem;
  padding-left: 2rem;
  padding-right: 1rem;
  border: 2px solid hsl(37, 14%, 64%);
  background: var(--beach);
  outline: none;
  border-radius: 16px;
`;
const Small = styled.input`
  font-style: ${(props) => props.theme.f2.fontStyle};
  font-family: ${(props) => props.theme.f2.fontFamily};
  font-weight: ${(props) => props.theme.f2.fontWeight};
  font-size: ${(props) => props.theme.f2.fontSize};
  line-height: ${(props) => props.theme.f2.lineHeight};
  color: ${(props) => props.theme.f2.color};
  border: 0;
  padding: 0.5rem 1rem;
  border: 0;
  background: var(--background);
  outline: none;
  border-radius: 16px;
`;

export default function TextInput({ variant, value, onChange, placeholder }) {
  if (variant === "f1") {
    return (
      <Large
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></Large>
    );
  } else if (variant === "f2") {
    return (
      <Small
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></Small>
    );
  }
}
