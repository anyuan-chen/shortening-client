import React from "react";
import styled from "styled-components";
import Text from "../ui/Text";
const Option = styled.button`
  border-radius: 16px;
  background-color: var(--beach);
  column-gap: 1rem;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: ${(props) => (props.toggled ? "6px 6px 0 var(--ocean)" : "")};
  transform: ${(props) =>
    props.toggled ? "translate(-6px, -6px)" : "translate(0,0)"};
`;
export default function Oauthselector({ toggled, toggle, imgsrc, children }) {
  return (
    <Option toggled={toggled} onClick={toggle}>
      <img src={imgsrc} alt="logo" height="40px"></img>
      <Text variant="t2">{children}</Text>
    </Option>
  );
}
