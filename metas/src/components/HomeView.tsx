import styled from "styled-components";

export const HomeView = () => {
    return (
        <Container>
            <h1>Home</h1>
        </Container>
    );
};

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: always;
`;