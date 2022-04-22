import React from "react";
import styled from "styled-components";
import Header from "../ui/Header";
import ModifiedTextField from "./ModifiedTextField";

const StyledButton = styled.button`
  background-color: var(--blue);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 1rem;
  padding-bottom: 0.8rem;
  font-style: ${(props) => props.theme.b1.fontStyle};
  font-family: ${(props) => props.theme.b1.fontFamily};
  font-weight: ${(props) => props.theme.b1.fontWeight};
  font-size: ${(props) => props.theme.b1.fontSize};
  line-height: ${(props) => props.theme.b1.lineHeight};
  color: ${(props) => props.theme.b1.color};
`;

const ToggleContainer = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Container = styled.div`
  height: 70vh;
  width: 35vw;
  background-color: var(--background);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  padding: 2rem 2rem;
`;
export default function Modal({ link, closeModal, visible }) {
  return (
    <ToggleContainer visible={visible}>
      <Container>
        <img src="/person_background.png" alt="person with background"></img>
        <Header variant="h2">your shortening:</Header>
        <ModifiedTextField link={link}></ModifiedTextField>
        <StyledButton onClick={closeModal}>close</StyledButton>
      </Container>
    </ToggleContainer>
  );
}
