import React from "react";
import styled from "styled-components";
import Text from "../ui/Text";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  background-color: var(--beach);
  border-radius: 16px;
  padding-top: 0.5rem;
  padding-bottom: 0.7rem;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: flex-end;
`;

export default function ModifiedTextField({ link }) {
  return (
    <Container>
      <Text variant="t1" style={{ color: "var(--ocean)" }}>
        {link}
      </Text>
      <button
        onClick={() => {
          navigator.clipboard.writeText(link);
        }}
      >
        <img src="/copy.svg" alt="copy button" height="28px"></img>
      </button>
    </Container>
  );
}
