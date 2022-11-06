import styled from "styled-components"
import { useState } from 'react';
import { Colors } from "../styles/colors";
import { Body, Headline, SmallBold } from "./text";
import plusIcon from '../assets/images/plusIcon.png'

export const CreateCommunity = ({ open, createForest }: CreateCommunityProps) => {
    const playerName = "Jaakko"
    const [name, setName] = useState<string>("");
    const [name2,setN2] = useState<string>("");
    return (
        <Container open={open}>
            <SubTitle>Community Forest</SubTitle>
            <Title>Create A New Forest</Title>
            <Text>You can create a new  community forest by adding three other players here by their usernames. <br/><br/> The rules are simple: You’re competing against your friends by trying to gain more area by growing more trees. The more money you save, more trees you grow.</Text>
            <HeadLine>Player Names Here:</HeadLine>
            <InputBar>
                <Input value={playerName} disabled/> 
            </InputBar>
            <InputBar>
                <Input placeholder="Second Username..." onChange={(evt) => setName(evt.target.value as string)}/> 
                <AddButton src={plusIcon}/>
            </InputBar>
            <InputBar>
                <Input placeholder="Third Username..." onChange={evt => setN2(evt.target.value as string)}/> 
                <AddButton src={plusIcon}/>
            </InputBar>
            <CreateButton onClick={() => createForest([name,name2])}>
                <CreateText>Plant The Seed</CreateText>
            </CreateButton>
        </Container>
    )
}

const CreateText = styled(Body)`
    color: ${Colors.snow};
`;

const CreateButton = styled.button`
    background: ${Colors.analgreen};
    width: 100%;
    height: 64px;
    border-radius: 16px;
    margin-top: 48px;
    border: none;
    transition: 0.2s;

    &:active {
        background: ${Colors.mdma};
    }
`;

const AddButton = styled.img`
    width: 36px;
`;

const Input = styled.input`
    width: 70%;
    border: none;
    font-size: 15px;
    background: transparent;

    &:focus {
        outline: none;
        border: none;
    }
`;

const InputBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 16px;
    height: 64px;
    border-radius: 12px;
    margin-top: 16px;
    border: solid 1px ${Colors.analgreen};
`;

const HeadLine = styled(SmallBold)`
    color: ${Colors.mdmaDark};
    margin-top: 42px;
    margin-bottom: 6px;
`;

const Text = styled(Body)`
    margin-top: 16px;
    color: ${Colors.mdmaDark};
`;

const Title = styled(Headline)`
    margin-top: 4px;
    color: ${Colors.mdma};
`;

const SubTitle = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: ${Colors.black};
`;

const Container = styled.div<{ open: boolean }>`
    background: ${Colors.snow};
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
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
    open: boolean,
    createForest: (names: string[]) => Promise<void>
}