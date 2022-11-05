import { Task } from "../types/tasks";
import styled from "styled-components";
import { Colors } from "../styles/colors";
import { Body, Data, SmallData, TitleTwo } from "./text";

export const TaskItem = ({ data }: { data: Task }) => {
    return (
        <TaskItemContainer>
            <TaskContentLeft>
            <TaskItemTitle>{data.title}</TaskItemTitle>
            <TaskItemTimeLeft>4h 20min</TaskItemTimeLeft>
            <TaskItemDesc>{data.desc}</TaskItemDesc>
            </TaskContentLeft>
            <TaskContentRight>
            <TaskItemEmission>
                <EmissionValue>{data.emission} kg</EmissionValue>     
                <EmissionUnit>of CO2</EmissionUnit>
            </TaskItemEmission> 
            </TaskContentRight>
       </TaskItemContainer>
    );
};

const EmissionUnit = styled(SmallData)`
    color: ${Colors.mdma}
`;

const EmissionValue = styled(Data)`
    color: ${Colors.analgreen};
`;

const TaskItemEmission = styled.div`
    height: 64px;
    width: 64px;
    border: solid 1px ${Colors.analgreen};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 18px;
`;

const TaskItemDesc = styled(Body)`
    color: ${Colors.grey};
`;

const TaskItemTitle = styled(TitleTwo)`
    color: ${Colors.black};
    margin-bottom: 2px;
`;

const TaskItemTimeLeft = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: ${Colors.grey};
    margin-bottom: 6px;
`;

const TaskContentRight = styled.div`
    display: flex;
    flex-direction: column;
`;

const TaskContentLeft = styled.div`
    display: flex;
    flex-direction: column;
`;

const TaskItemContainer = styled.div`
    width: 95%;
    margin: 0px auto;
    margin-top: 16px;
    max-width: 400px;
    padding: 30px;
    background: #fff;
    border-radius: 20px;
    display: flex;
    align-items: center;
`;