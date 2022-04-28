import React from "react";
import styled from "styled-components";
import Header from "../components/ui/Header";
import Button from "../components/ui/Button";
import LinkDisplay from "../components/dashboard/Linkdisplay";
const Container = styled.div`
  width: 100vw;
  display: flex;
  background: var(--background);
  padding: 0rem 6rem;
  flex-direction: column;
`;
const HeaderBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: auto;
  padding-bottom: 2rem;
  padding-top: 2rem;
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
export default function Dashboard() {
  return (
    <Container>
      <HeaderBar>
        <Header variant="h2">my urls</Header>
        <Button>
          <img src="akar-icons_plus.svg"></img>
          add another
        </Button>
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
    </Container>
  );
}
