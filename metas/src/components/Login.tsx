import { useState } from "react";
import { Colors } from "../styles/colors";
import Image from "../assets/images/placeholder3D.png";
import styled from "styled-components";
import { loginUser } from "../data/api";
import { useUserInfoStore } from "../index";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const setToken = useUserInfoStore((state: any) => state.setToken);
  // const token = useUserInfoStore((state: any) => state.token);
  const handleLogin = async (username: string) => {
    const gottenToken = await loginUser(username);
    setToken(gottenToken);
    navigate("/");
  };
  return (
    <Container>
      <BGImage src={Image} />
      <Title>Aarn.io</Title>
      <Input
        placeholder="Username here..."
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <Button onClick={() => handleLogin(username)}>Log In</Button>
      <Copyright>AARNIO ® 2022</Copyright>
    </Container>
  );
};

const Copyright = styled.p`
  position: absolute;
  bottom: 7vh;
  left: 50%;
  font-size: 10px;
  transform: translateX(-50%);
  color: ${Colors.snow};
`;

const BGImage = styled.img`
  position: absolute;
  top: -2%;
  right: -50%;
  width: 140%;
`;

const Button = styled.button`
  width: 80vw;
  margin: 0 auto;
  border-radius: 8px;
  background: ${Colors.mdmaDark};
  padding: 1.2rem;
  border: none;
  color: ${Colors.snow};
  filter: drop-shadow(0px 4px 0px rgba(0, 0, 0, 0.25));
`;

const Input = styled.input`
  margin-left: calc(10vw);
  width: 80vw;
  padding: 1.5rem;
  border-radius: 10px;
  border: none;
  outline: none;
  margin: 32px auto;
`;

const Title = styled.h1`
  text-align: left;
  margin-left: calc(10vw);
  padding-top: 55vh;
  font-size: 48px;
  font-weight: 900;
  color: ${Colors.snow};
`;

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(180deg, #9ab4a2 0%, #5c7564 100%);
  display: flex;
  flex-direction: column;
`;
