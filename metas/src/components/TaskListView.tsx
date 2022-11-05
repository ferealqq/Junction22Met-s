import styled from "styled-components";
import { useState } from "react";
import { Task } from "../types/tasks";
import { tasksMockup } from "../data/tasksMockup";
import { TaskItem } from "./TaskItem";

export const TaskListView = () => {
    const [tasks, setTasks] = useState<Task[]>(tasksMockup);

    return (
        <TaskListContainer>
            {tasks.map((task) => (
                <div>
                    <TaskItem key={task.id} data={task} />
                </div>
                            ))}
        </TaskListContainer>
    )};

const TaskListContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: green opacity(30%);
    height: 100vh;
    scroll-snap-align: center;
`;