import styled from "styled-components"
import { Colors } from "../styles/colors"
import { TitleOne } from "./text"
import backArrow from '../assets/images/backArrow.png'

export const TaskPage = () => {
    return (
        <Container>
            <TopBar>
                <BackArrow src={backArrow} onClick={() => window.location.href = "/"}/>
                <Title>All Tasks</Title>
                <Space />
            </TopBar>
        </Container>
    )
}

const Space = styled.div`
    width: 44px;
`

const BackArrow = styled.img`
    width: 44px;
    height: 44px;
    margin: 0 0 0 20px;
`

const TopBar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`

const Title = styled(TitleOne)`
    margin: 24px;
    color: ${Colors.snow};
`

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${Colors.base}
`