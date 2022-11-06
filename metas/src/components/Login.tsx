import { Colors } from "../styles/colors";
import styled from "styled-components";

export const Login = () => {

    return (
        <Container>
            <Title>Log in</Title>
            <Input placeholder="Email"/>
            <Button>Log In</Button>
        </Container>
    )
}

const Button = styled.button`
`;

const Input = styled.input``;

const Title = styled.h1`

`;

const Container = styled.div`
    background: ${Colors.mdma}
`;