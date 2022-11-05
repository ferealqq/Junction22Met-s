import styled from "styled-components";
import { Colors } from "../styles/colors";
import { SmallBold, WOW } from "./text";

export const StatsView = () => {
    return ( 
        <Container>
            <StatsText>
                <WOWW>Wow!</WOWW>
                <WOWBody>You have saved up to 300kg of CO2 this week compared to average Finn..</WOWBody>
            </StatsText>
            <Statistics>

            </Statistics>
        </Container> 
    );
};

const WOWW = styled(WOW)`
    margin-right: 1rem;
`;

const WOWBody = styled(SmallBold)`
    color: ${Colors.analgreen};
`;

const StatsText = styled.div`
    position: absolute;
    color: ${Colors.analgreen};
    top: 36px;
    left: 0;
    margin: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Statistics = styled.div`
    width: 95%;
    height: 40vh;
    background: ${Colors.snow};
    border-radius: 20px;
    margin: 0 auto;
    margin-top: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid ${Colors.analgreen};
`;

const Container = styled.section` 
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: red opacity(30%);
    height: 70vh;
    scroll-snap-align: start;
    position: relative;
`;
