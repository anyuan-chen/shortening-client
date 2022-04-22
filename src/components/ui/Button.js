import styled from "styled-components";
import React from "react";
const StyledButton = styled.button`
  background-color: var(--blue);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 0.8rem;
  font-style: ${(props) => props.theme.b1.fontStyle};
  font-family: ${(props) => props.theme.b1.fontFamily};
  font-weight: ${(props) => props.theme.b1.fontWeight};
  font-size: ${(props) => props.theme.b1.fontSize};
  line-height: ${(props) => props.theme.b1.lineHeight};
  color: ${(props) => props.theme.b1.color};
`;

export default function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
