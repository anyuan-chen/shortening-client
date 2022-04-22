import React from "react";
import styled from "styled-components";
import Header from "../components/ui/Header";
import Button from "../components/ui/Button";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
const LeftHalf = styled.div`
  width: 50%;
  height: 100%;
  background-color: var(--background);
`;
const RightHalf = styled.div`
  width: 50%;
  height: 100%;
  background-color: var(--beach);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const OAuthContainer = styled.div`

`


export default function Login() {
  return (
    <Container>
      <LeftHalf>
        <Header variant="h1">log in</Header>
        <Button>login</Button>
      </LeftHalf>
      <RightHalf>
        <img
          src="./login.svg"
          alt="illustration of human"
          height="80%"
          width="80%"
        ></img>
      </RightHalf>
    </Container>
  );
}
