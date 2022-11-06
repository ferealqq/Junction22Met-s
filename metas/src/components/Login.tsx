import { Colors } from "../styles/colors";
import styled from "styled-components";

export const Login = () => {
  return (
    <Container>
      <Title>Aarn.io</Title>
      <Input placeholder="Email" />
      <Button>Log In</Button>
    </Container>
  );
};

const Button = styled.button``;

const Input = styled.input`
  margin-left: 25vw;
`;

const Title = styled.h1`
  text-align: left;
  padding-left: 10vw;
  padding-top: 55vh;
  font-size: 48px;
`;

const Container = styled.div`
  height: 100vh;
  background: ${Colors.mdma};
`;
