import React from "react";
import styled from "styled-components";
import Header from "../ui/Header";
import Text from "../ui/Text";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  background-color: var(--beach);
  border-radius: 16px;
  padding: 0.5rem 1rem;
  align-items: flex-end;
`;

export default function ModifiedTextField() {
  return (
    <Container>
      <Text variant="f1">hi</Text>
      <button>
        <img src="/copy.svg" alt="copy button"></img>
      </button>
    </Container>
  );
}
