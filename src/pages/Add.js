import React from "react";
import Header from "../components/ui/Header";
import styled from "styled-components";
import TextInput from "../components/ui/TextInput";
import Text from "../components/ui/Text";
import Button from "../components/ui/Button";
import LoginButton from "../components/ui/LoginButton";
import { Link } from "react-router-dom";
const Container = styled.div`
  background: var(--beach);
  width: 100%;
  padding: 2rem;
  border-radius: 16px;
`;
const HeadContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 8rem;
  padding-bottom: 2rem;
`;
const CopyButton = styled.button`
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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
`;
// const Circles = styled.div`
//   overflow: hidden;
//   position: relative;
//   height: 100%;
// `;
const Teal = styled.div`
  height: 70vw;
  width: 70vw;
  background: rgba(233, 218, 193, 0.7);
  border-radius: 100%;
  position: absolute;
  left: 60%;
  bottom: -70%;
  background: var(--teal);
  z-index: 0;
  opacity: 0.8;
`;
const Beach = styled.div`
  height: 50vw;
  width: 50vw;
  background: rgba(233, 218, 193, 0.7);
  border-radius: 100%;
  position: absolute;
  bottom: -60%;
  left: 25%;
  z-index: 0;
`;
const Sky = styled.div`
  height: 40vw;
  width: 40vw;
  background: rgba(233, 218, 193, 0.7);
  border-radius: 100%;
  position: absolute;
  left: -10%;
  bottom: -40%;
  z-index: 0;
  background: var(--sky);
`;
const Content = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: var(--background);
  overflow: hidden;
  position: relative;
`;
const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;
const ButtonContainer = styled.div``;
const Main = styled.div`
  width: 70%;
  padding-left: 8rem;
`;
const LoginBar = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  padding-right: 5%;
  padding-top: 2%;
`;
export default function Add() {
  return (
    <Content>
      <LoginBar>
        <LoginButton href="/">Log out</LoginButton>
      </LoginBar>
      <Main>
        <HeadContainer>
          <Header variant="h2">create a new url</Header>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <Button>
              view links
              <img
                src="/akar-icons_arrow-right.svg"
                alt="arrow-right"
                style={{ paddingLeft: "1rem" }}
              ></img>
            </Button>
          </Link>
        </HeadContainer>
        <Container>
          <Form>
            <TextGroup>
              <Text variant="f1">url</Text>
              <TextInput variant="f2"></TextInput>
            </TextGroup>
            <TextGroup>
              <Text variant="f1">shortening</Text>
              <CopyButton>&nbsp;</CopyButton>
            </TextGroup>
            <ButtonContainer>
              <Button>add</Button>
            </ButtonContainer>
          </Form>
        </Container>
      </Main>
      <Sky></Sky>
      <Teal></Teal>
      <Beach></Beach>
    </Content>
  );
}
