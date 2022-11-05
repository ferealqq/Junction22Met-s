import styled from "styled-components";
import { useState } from "react";
import { Task } from "../types/tasks";
import { tasksMockup } from "../data/tasksMockup";
import { TaskItem } from "./TaskItem";
import { Colors } from "../styles/colors";
import { TitleThree } from "./text";
import { useWorldModelStore } from "../App";

interface TaskListViewProps {
  currentView: string;
}

interface TitleProps {
  active: boolean;
}

export const TaskListView = ({ currentView }: TaskListViewProps) => {
  const [tasks, setTasks] = useState<Task[]>(tasksMockup);
  const decrease = useWorldModelStore((state: any) => state.decreasePopulation);
  const increase = useWorldModelStore((state: any) => state.increasePopulation);
  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskListContainer>
      <Content>
        <ListTitle active={currentView == "tasks"}>
          Swipe To Complete Or Pass
        </ListTitle>
        {tasks.length !== 0 &&
          tasks.slice(0, 3).map((task) => (
            <div>
              <TaskItem
                removeTask={removeTask}
                key={task.id}
                data={task}
                increase={increase}
                decrease={decrease}
              />
            </div>
          ))}

        {tasks.length === 0 && <NoTasks>No tasks available...</NoTasks>}

        <AllTasksButton href={`tasks`}>All Tasks</AllTasksButton>
      </Content>
    </TaskListContainer>
  );
};

const NoTasks = styled(TitleThree)`
  color: ${Colors.mdmaDark};
  margin: 12px 0;
`;

const ListTitle = styled(TitleThree)<TitleProps>`
  margin-bottom: 12px;
  color: ${Colors.snow};
  transition: all 0.2s;
  opacity: ${(props) => (props.active ? 1 : 0)};
`;

const AllTasksButton = styled.a`
  background: ${Colors.mdma};
  padding: 1rem 2rem;
  border-radius: 50px;
  margin: 36px 0;
  margin-bottom: 96px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskListContainer = styled.section`
  width: 100%;
  background: green opacity(30%);
  //height: 72vh;
  position: relative;
  scroll-snap-align: center;
  overflow-x: hidden;
  padding-top: 0vh;
  margin-top: -25vh;
`;
