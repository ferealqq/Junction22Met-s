import styled from "styled-components";
import { TaskActivity } from "../types/tasks";
import { TaskItem } from "./TaskItem";
import { Colors } from "../styles/colors";
import { TitleThree } from "./text";
import { useTaskStore, useWorldModelStore } from "../index";

interface TaskListViewProps {
  currentView: string;
}

interface TitleProps {
  active: boolean;
}

export const TaskListView = ({ currentView }: TaskListViewProps) => {
  const tasks = useTaskStore((state: any) => state.tasks);
  const setTasks = useTaskStore((state: any) => state.setTasks);

  const isCommunityWorld = useWorldModelStore(
    (state: any) => state.isCommunityWorld
  );
  const decreasePersonal = useWorldModelStore(
    (state: any) => state.decreasePersonalPopulation
  );
  const increasePersonal = useWorldModelStore(
    (state: any) => state.increasePersonalPopulation
  );
  const increaseCommunity = useWorldModelStore(
    (state: any) => state.increaseCommunityPopulation
  );
  const decreaseCommunity = useWorldModelStore(
    (state: any) => state.decreaseCommunityPopulation
  );
  const removeTask = (id: string) => {
    setTasks(tasks.filter((task: TaskActivity) => task.id !== id));
  };

  return (
    <TaskListContainer>
      <Content>
        <ListTitle active={currentView === "tasks"}>
          Swipe To Complete Or Pass
        </ListTitle>
        {tasks.length !== 0 &&
          tasks
            .slice(0, 3)
            .map((task: TaskActivity) => (
              <TaskItem
                removeTask={removeTask}
                key={task.id}
                data={task}
                increase={
                  isCommunityWorld ? increaseCommunity : increasePersonal
                }
                decrease={
                  isCommunityWorld ? decreaseCommunity : decreasePersonal
                }
              />
            ))}

        {tasks.length === 0 && <NoTasks>No tasks available...</NoTasks>}

        {
          //<AllTasksButton href={`tasks`}>All Tasks</AllTasksButton>
        }
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
  position: relative;
  scroll-snap-align: center;
  overflow-x: hidden;
  padding-top: 0vh;
  margin-top: -25vh;
  margin-bottom: 10vh;
  transition: 1s;
`;
