//Import 3D placeholder image from assets folder and add it to background
import styled from 'styled-components';
import Placeholder from "../assets/images/placeholder3D.png";

export const Forest = () => {
    return (
        <RenderContainer>
            <Image src={Placeholder} alt="3D placeholder" />
        </RenderContainer>
    )
}

const Image = styled.img`
    width: 120%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`;

const RenderContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    position: fixed;
    top: 0;
    overflow-x: hidden;
`;