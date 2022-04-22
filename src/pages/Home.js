import React from "react";
import styled from "styled-components";
import Header from "../components/ui/Header";
import TextInput from "../components/ui/TextInput";
import Button from "../components/ui/Button";
import LoginButton from "../components/ui/LoginButton";
import { useState } from "react";
import Modal from "../components/home/Modal";
const LoginBar = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-bottom: 2rem;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--background);
  filter: ${(props) =>
    props.modalVisible ? "brightness(50%)" : "brightness(100%)"};
`;
const Content = styled.div`
  padding: 2rem 4rem;
`;
const Form = styled.form`
  width: 40vw;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;
const Circles = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  padding-top: 10vh;
`;
const Teal = styled.div`
  height: 70vw;
  width: 70vw;
  background: rgba(233, 218, 193, 0.7);
  border-radius: 100%;
  position: absolute;
  left: 60%;
  bottom: -130%;
  background: var(--teal);
`;
const Beach = styled.div`
  height: 50vw;
  width: 50vw;
  background: rgba(233, 218, 193, 0.7);
  border-radius: 100%;
  position: absolute;
  bottom: -110%;
  left: 25%;
`;
const Sky = styled.div`
  height: 50vw;
  width: 50vw;
  background: rgba(233, 218, 193, 0.7);
  border-radius: 100%;
  position: absolute;
  left: -10%;
  background: var(--sky);
`;
export default function Home() {
  const [link, setLink] = useState("");
  const [modalLink, setModalLink] = useState("google.com");
  const [modalVisible, setModalVisible] = useState(false);

  const submitLink = async () => {
    // const data = { long: link };
    // const response = await fetch(SERVER_URL, {
    //   method: "POST",
    //   mode: "cors",
    //   cache: "no-cache",
    //   headers: { "Content-Type": "application/json" },
    //   body: data,
    // });
    // setModalLink(response);
    setModalVisible(true);
  };

  return (
    <>
      <Container modalVisible={modalVisible}>
        <Content>
          <LoginBar>
            <LoginButton href="/login">Log in</LoginButton>
            <LoginButton href="/signup">Sign up</LoginButton>
          </LoginBar>
          <Header variant="h1">shortening</Header>
          <Form>
            <TextInput
              value={link}
              onChange={(event) => setLink(event.target.value)}
              variant="f1"
              placeholder={"enter link here.."}
            ></TextInput>
          </Form>
          <Button onClick={submitLink}>generate!</Button>
        </Content>
        <Circles>
          <Sky></Sky>
          <Teal></Teal>
          <Beach></Beach>
        </Circles>
      </Container>{" "}
      <Modal
        link={modalLink}
        closeModal={() => setModalVisible(false)}
        visible={modalVisible}
      ></Modal>
    </>
  );
}
