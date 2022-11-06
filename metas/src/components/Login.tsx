import { useState } from "react";
import { Colors } from "../styles/colors";
import Image from '../assets/images/placeholder3D.png'
import styled from "styled-components";

export const Login = () => {
  const [email, setEmail] = useState(""); 

  return (
    <Container>
      <BGImage src={Image}/>
      <Title>Aarn.io</Title>
      <Input placeholder="Username here..." value={email} onChange={(event) => setEmail(event.target.value)}/>
      <Button>Log In</Button>
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
  background: linear-gradient(180deg, #9AB4A2 0%, #5C7564 100%);
  display: flex;
  flex-direction: column;
`;
