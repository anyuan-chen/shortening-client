import React from "react";
import styled from "styled-components";
import Header from "../ui/Header";
import Text from "../ui/Text";
const Container = styled.div`
  background-color: var(--beach);
  border-radius: 16px;
  padding: 2rem 3rem;
  width: 100%;
`;
const StyledButton = styled.button`
  background-color: var(--sky);
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
`;
const ShortLink = styled.div``;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  column-gap: 2rem;
`;
export default function LinkDisplay() {
  return (
    <Container>
      <ShortLink>
        <Header variant="h2black">hi</Header>
      </ShortLink>
      <Info>
        <Text variant="f1">hi</Text>
        <ButtonContainer>
          <StyledButton>add</StyledButton>
          <StyledButton>delete</StyledButton>
        </ButtonContainer>
      </Info>
    </Container>
  );
}
