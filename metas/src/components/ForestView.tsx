//Import 3D placeholder image from assets folder and add it to background
import styled from 'styled-components';
import Placeholder from "../assets/images/placeholder3D.png";

interface ForestProps {
    currentView: string;
}

export const ForestView = (props: ForestProps) => {
    return (
        <Container currentView={props.currentView}>
            <Image src={Placeholder} alt="3D placeholder" currentView={props.currentView}/>
        </Container>
    )
}

const Image = styled.img<ForestProps>`
    width: 100%;
    object-fit: cover;
    position: absolute;
    transition: 0.7s;
    transition-timing-function: cubic-bezier(0.3, 0.1, 0.2, 0.3);
    top: ${props => props.currentView === 'stats' ? '50%' : props.currentView === 'home' ? '25%' : '-7%'};
    opacity: ${props => props.currentView === 'stats' ? '1' : props.currentView === 'home' ? '0.9' : '0.6'};
    left: 50%;
    transform: translateX(-48%);
`;

const Container = styled.div<ForestProps>`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: -1;
    overflow-x: hidden;
`;