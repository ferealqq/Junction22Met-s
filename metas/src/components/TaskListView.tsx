import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { Task } from "../types/tasks";
import { tasksMockup } from "../data/tasksMockup";
import { TaskItem } from "./TaskItem";
import { Colors } from "../styles/colors";

export const TaskListView = () => {
    const [tasks, setTasks] = useState<Task[]>(tasksMockup);

    return (
       
        <TaskListContainer>
            <Content>
            {tasks.map((task) => (
                <div>
                    <TaskItem key={task.id} data={task} />
                </div>
                            ))}
 
            <AllTasksButton href={`tasks`}>All Tasks</AllTasksButton>
            </Content>
       </TaskListContainer>
       
    )};

const AllTasksButton = styled.a`
    background: ${Colors.mdma};
    padding: 1rem 2rem;
    border-radius: 50px;
    margin: 24px 0;
    border: none;
    font-size: 15px;
    color: ${Colors.snow};
    transition: background ease-out 0.1s;
    text-decoration: none;

    &:active {
        background: ${Colors.mdmaDark};
    }

    &:focus {
        outline: none;
    }
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    top: -25vh;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TaskListContainer = styled.section`
    width: 100%;
    background: green opacity(30%);
    height: 44vh;
    position: relative;
    scroll-snap-align: center;
`;