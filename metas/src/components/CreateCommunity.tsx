import styled from "styled-components"
import { Colors } from "../styles/colors";

export const CreateCommunity = ({ open }: CreateCommunityProps) => {

    return (
        <Container open={open}>
            <h1>Create New</h1>
        </Container>
    )
}


const Container = styled.div<{ open: boolean }>`
    background: ${Colors.snow};
    padding: 1rem 2rem;
    width: 90%;
    height: 80vh;
    bottom: 0;
    border-radius: 17px 17px 0px 0px;
    position: fixed;
    z-index: 11;
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    transform: translateY(${(props) => (props.open ? 0 : "100%")});
`;

interface CreateCommunityProps {
    open: boolean
}