import React from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import Header from "../ui/Header";
import TextInput from "../ui/TextInput";
import ModifiedTextField from "./ModifiedTextField";

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
  row-gap: 1rem;
`;
export default function Modal({ link, closeModal, visible }) {
  return (
    <ToggleContainer visible={visible}>
      <Container>
        <img src="/person_background.png" alt="person with background"></img>
        <Header variant="h2">your shortening:</Header>
        <ModifiedTextField link={link}></ModifiedTextField>
        <Button onClick={closeModal}>close</Button>
      </Container>
    </ToggleContainer>
  );
}
