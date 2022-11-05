import { useEffect } from "react";
import styled from "styled-components";
import { Headline } from "./text";

export const HomeView = () => {
    return (
        
        <Container>
            <ForestTitle>Pekka's Forest</ForestTitle>
        </Container>
    );
};

const ForestTitle = styled(Headline)`
    position: absolute;
    left: 0;
    top: 96px;
    margin: 24px;
`;

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: always;
`;