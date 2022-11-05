//Import 3D placeholder image from assets folder and add it to background
import styled from 'styled-components';
import Placeholder from "../assets/images/placeholder3D.png";

export const Forest = () => {
    return (
        <Container>
            <Image src={Placeholder} alt="3D placeholder" />
        </Container>
    )
}

const Image = styled.img`
    width: 120%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: -1;
    overflow-x: hidden;
`;