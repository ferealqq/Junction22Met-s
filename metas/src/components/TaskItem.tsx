import { Task } from "../types/tasks";
import styled from "styled-components";
import { Colors } from "../styles/colors";
import { Body, Data, TitleTwo } from "./text";

export const TaskItem = ({ data }: { data: Task }) => {
    return (
        <TaskItemContainer>
            <TaskItemTitle>{data.title}</TaskItemTitle>
            <TaskItemDesc>{data.desc}</TaskItemDesc>
            <TaskItemEmission>{data.emission} kg CO2</TaskItemEmission>
        </TaskItemContainer>
    );
};

const TaskItemEmission = styled(Data)`

`;

const TaskItemDesc = styled(Body)`
    color: ${Colors.grey};
`;

const TaskItemTitle = styled(TitleTwo)`
    color: ${Colors.black};
`;

const TaskItemContainer = styled.div`
    width: 95%;
    margin: 0px auto;
    margin-top: 16px;
    max-width: 400px;
    padding: 20px;
    background: #fff;
    border-radius: 20px;
`;