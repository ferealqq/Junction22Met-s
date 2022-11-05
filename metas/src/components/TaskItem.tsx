import { useRef, useState } from "react";
import { Task } from "../types/tasks";
import styled from "styled-components";
import { Colors } from "../styles/colors";
import { Body, Data, SmallData, TitleTwo } from "./text";
import Draggable from "react-draggable";

interface TaskBoxProps {
    color: string,
}

export const TaskItem = ({ data, removeTask }: { data: Task, removeTask: (id: string) => void }) => {
    const [posData, setPosData] = useState({ x: 0, y: 0 });
    const [color, setColor] = useState<string>("#FFF");
    const draggableBox = useRef();

    const handleDrag = (event: any) => {
        //@ts-ignore
        const xChange = draggableBox.current.getBoundingClientRect().x;

        //if xChange is smaller than posData.x then the box is dragged to left
        //if dragged to left background color linearly from white to red
        if (xChange < 10) {
            const percentage = (-xChange / window.innerWidth) * 100;
            const red = 255;
            const green = 255 - percentage;
            const blue = 255 - percentage;
            const color = `rgb(${red}, ${green}, ${blue})`;
            setColor(color);
        }

        //if xChange is bigger than posData.x then the box is dragged to right
        //if dragged to right background color linearly from white to green
        if (xChange >= 10) {
            const percentage = (xChange / window.innerWidth) * 100;
            const red = 255 - percentage;
            const green = 255;
            const blue = 255 - percentage;
            const color = `rgb(${red}, ${green}, ${blue})`;
            setColor(color);
        }
    };

    const handleStop = (event: any) => {
        //@ts-ignore
        const xChange = draggableBox.current.getBoundingClientRect().x;
        console.log(xChange);

        if (xChange < -180) {
            console.log("delete");
            //Task deleted
            removeTask(data.id);
            setPosData({ x: 0, y: 0 });
        } else if (xChange > 205) {
            console.log("complete");
            //Trigger task completion
            removeTask(data.id);
            setPosData({ x: 0, y: 0 });
        } else {
            console.log("reset");
            setPosData({ x: 0, y: 0 });
        }
        setColor("#FFF")
    }

    return (
        <Draggable
            axis="x" 
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={posData}
            scale={1}
            onDrag={handleDrag}
            onStop={handleStop}
                    >
        <TaskItemContainer className="handle" color={color} //@ts-ignore
            ref={draggableBox}
>
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
       </Draggable>
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

const TaskItemContainer = styled.div<TaskBoxProps>`
    width: 95%;
    margin: 0px auto;
    margin-top: 16px;
    max-width: 400px;
    padding: 30px;
    background: ${props => props.color};
    border-radius: 20px;
    display: flex;
    align-items: center;
    transition: 0.08s linear;
`;