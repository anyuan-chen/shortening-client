import React from "react";
import styled from "styled-components";
import Header from "../components/ui/Header";
import Button from "../components/ui/Button";
import LinkDisplay from "../components/dashboard/Linkdisplay";
import LoginButton from "../components/ui/LoginButton";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  display: flex;
  background: var(--background);
  flex-direction: column;
  align-items: center;
`;
const HeaderBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: auto;
  padding-bottom: 2rem;
  padding-top: 4rem;
  position: sticky;
  top: 0px;
  background: var(--background);
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  background: var(--background);
`;
const Content = styled.div`
  width: 80%;
`;
const LoginBar = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-bottom: 2rem;
  width: 100%;
  padding-right: 5%;
  padding-top: 2%
`;
export default function Dashboard() {
  return (
    <Container>
      <LoginBar>
        <LoginButton href="/signup">Log out</LoginButton>
      </LoginBar>
      <Content>
        <HeaderBar>
          <Header variant="h2">my urls</Header>
          <Link to="/add" style={{ textDecoration: "none" }}>
            <Button>
              <img src="akar-icons_plus.svg"></img>
              add another
            </Button>
          </Link>
        </HeaderBar>
        <LinkContainer>
          <LinkDisplay></LinkDisplay>
          <LinkDisplay></LinkDisplay>
          <LinkDisplay></LinkDisplay>
          <LinkDisplay></LinkDisplay>
          <LinkDisplay></LinkDisplay>
          <LinkDisplay></LinkDisplay>
          <LinkDisplay></LinkDisplay>
          <LinkDisplay></LinkDisplay>
          <LinkDisplay></LinkDisplay>
        </LinkContainer>
      </Content>
    </Container>
  );
}
