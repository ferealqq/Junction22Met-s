import styled from "styled-components";
import { Colors } from "../styles/colors";

export const StatsView = () => {
    return (
        <Container>
            Stats
        </Container>
    );
};

const Container = styled.section` 
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: red opacity(30%);
    height: 100vh;
    scroll-snap-align: start;
`;
