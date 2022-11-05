import styled from "styled-components"
import { useEffect, useState } from "react"
import { Colors } from "../styles/colors"
import { Body, Headline, SmallData, TitleOne } from "./text"
import backArrow from '../assets/images/backArrow.png'
import { CreateCommunity } from "./CreateCommunity"

interface CommunityHubProps {
    open: boolean,
    closeCommunity: () => void,
    createForest: () => void
}

interface ContainerProps {
    open: boolean
}

export const CommunityHub = ({ open, closeCommunity, createForest }: CommunityHubProps) => {
    const [createStatus, setCreateStatus] = useState(false)

    useEffect(() => {
        console.log(createStatus)
    }, [createStatus])

    return (
        <Container open={open}>
            <TopBar onClick={() => setCreateStatus(false)}>
                <BackArrow src={backArrow} onClick={closeCommunity}/>
                <Title>Community</Title>
                <Space />
            </TopBar> 

            <Community />
            <Community />

            <AddNew onClick={() => setCreateStatus(true)}>
                <AddNewText>Plant New Forest</AddNewText>
            </AddNew>

            <CreateCommunity createForest={createForest} open={createStatus}/>
        </Container>
    )
}


const Community = () => {
    return (
        <SingleCommunity>
                <Row>
                    <TextBox>
                        <SubTitle>Community Forest</SubTitle>
                        <SmallTitle>Pekka, Aleksi, Jasse</SmallTitle>
                    </TextBox>
                    <HalfBox>
                        <InfoText>12 mil €</InfoText>
                        <Desc>total saved</Desc>
                    </HalfBox>
                </Row>
                <Row>
                    <Box>
                        <InfoText>3</InfoText>
                        <Desc>players</Desc>
                    </Box>
                    <Box>
                        <InfoText>17 days</InfoText>
                        <Desc>since seeding</Desc>
                    </Box>
                    <CTA>
                        <InfoText>Enter Woods</InfoText> 
                    </CTA>
                </Row>
            </SingleCommunity>
    )
}

const AddNewText = styled(Body)`
    color: ${Colors.sins};
`;

const AddNew = styled.button`
    background: ${Colors.snow};
    margin-top: 32px;
    padding: 1rem 1.5rem; 
    border-radius: 8px;
    outline: none;
    border: none;
    transition: 0.1s;
    z-index: 9;
    filter: drop-shadow(0px 4px 0px rgba(0, 0, 0, 0.25));

    &:active {
        filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.25));
        background: ${Colors.grey};
    }
`;


const SmallTitle = styled(Headline)`
    color: ${Colors.mdma};
`;

const SubTitle = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: ${Colors.black};
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const Desc = styled(SmallData)`
    color: ${Colors.mdmaDark};
`;

const InfoText = styled(Body)`
    color: ${Colors.analgreen};
`;

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: solid ${Colors.analgreen} 1px;
    height: 64px;
    width: 64px;
    border-radius: 8px;
`;

const HalfBox = styled(Box)`
    width: 128px;
    flex-shrink: 0;
    flex-grow: 0;
`;


const CTA = styled(Box)`
    width: 128px; 
    background: ${Colors.analgreen};

    > p {
    color: ${Colors.snow};
    }
`;

const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between; 
    margin: 6px 0;
`

const SingleCommunity = styled.div`
    background: ${Colors.snow};
    border-radius: 12px;
    width: 90%;
    padding: 24px 30px;
    display: flex;
    flex-direction: column;
    margin-top: 32px
`;

const Space = styled.div`
    width: 44px;
`

const BackArrow = styled.img`
    width: 44px;
    height: 44px;
`

const TopBar = styled.div`
    display: flex;
    align-items: center;
    width: 85%;
    margin: 0 auto;
    justify-content: space-between;
    margin-top: 48px;
`

const Title = styled(TitleOne)`
    margin: 24px;
    color: ${Colors.snow};
`

const Container = styled.div<ContainerProps>`
    width: 100%;
    position: fixed;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${Colors.base};
    z-index: 8;
    transition: 0.4s;
    top: ${(props) => (props.open ? 0 : "-100%")};
`;

