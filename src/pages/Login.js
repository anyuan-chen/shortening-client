import React from "react";
import styled from "styled-components";
import Header from "../components/ui/Header";
import Button from "../components/ui/Button";
import { useState } from "react";
import Oauthselector from "../components/login/Oauthselector";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
const LeftHalf = styled.div`
  width: 50%;
  height: 100%;
  background-color: var(--background);
  display: flex;
  justify-content: center;
  padding-top: 8rem;
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
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 2rem;
`;
const CenteringContainer = styled.div`
  width: 60%;
  row-gap: 4rem;
  display: flex;
  flex-direction: column;
`;

export default function Login() {
  const [google, setGoogle] = useState(false);
  const [github, setGithub] = useState(false);
  const login = () => {
    if (google) {
      window.location.href =
        process.env.REACT_APP_SERVER_URL + "/auth/google/login";
    }
    if (github) {
      window.location.href =
        process.env.REACT_APP_SERVER_URL + "/auth/github/login";
    }
  };
  return (
    <Container>
      <LeftHalf>
        <CenteringContainer>
          <Header variant="h1">log in</Header>
          <OAuthContainer>
            <Oauthselector
              imgsrc="/google.svg"
              toggled={google}
              toggle={() => {
                setGoogle(!google);
                setGithub(false);
              }}
            >
              use my google account
            </Oauthselector>
            <Oauthselector
              imgsrc="/github.svg"
              toggled={github}
              toggle={() => {
                setGoogle(false);
                setGithub(!github);
              }}
            >
              use my github account
            </Oauthselector>
          </OAuthContainer>
          <div>
            <Button onClick={login}>login</Button>
          </div>
        </CenteringContainer>
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
