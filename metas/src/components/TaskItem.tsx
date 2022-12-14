import { useRef, useState } from "react";
import { TaskActivity } from "../types/tasks";
import styled from "styled-components";
import { Colors } from "../styles/colors";
import { Body, Data, SmallData, TitleTwo } from "./text";
import Draggable from "react-draggable";
import { sendCompleteTask } from "../data/api";
import { useUserInfoStore, useWorldModelStore } from "../index";

interface TaskBoxProps {
  color: string;
}

export const TaskItem = ({
  data,
  removeTask,
  increase,
  decrease,
}: {
  data: TaskActivity;
  removeTask: (id: string) => void;
  increase: () => void;
  decrease: () => void;
}) => {
  const [posData, setPosData] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState<string>("#FFF");
  const draggableBox = useRef();

  const [usersDone, setUsersDone] = useState([
    {
      id: "3fa85f64-5737-4562-b3fc-2c963f66afa6",
      username: "Jasse",
      color: "orange",
    },
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      username: "Pekka",
      color: "violet",
    },
  ]);

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

  const token = useUserInfoStore((state: any) => state.token);
  const handleStop = (event: any) => {
    //@ts-ignore
    const xChange = draggableBox.current.getBoundingClientRect().x;

    if (xChange < -180) {
      //Task deleted
      removeTask(data.id);
      console.log("Task deleted");
      decrease();
      setPosData({ x: 0, y: 0 });
    } else if (xChange > 205) {
      //Trigger task completion
      removeTask(data.id);
      console.log(data);
      sendCompleteTask(data.id, token.jwt);
      increase();
      setPosData({ x: 0, y: 0 });
    } else {
      console.log("reset");
      setPosData({ x: 0, y: 0 });
    }
    setColor("#FFF");
  };
  const isCommunityWorld = useWorldModelStore(
    (state: any) => state.isCommunityWorld
  );

  return (
    <Draggable
      axis="x"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={posData}
      scale={1}
      onDrag={handleDrag}
      onStop={handleStop}
    >
      <TaskItemContainer
        className="handle"
        color={color} //@ts-ignore
        ref={draggableBox}
      >
        <TaskContentLeft>
          <TaskItemTitle>{data.task.title}</TaskItemTitle>
          { (new Date(data.starts_at)).getHours() > 0 && 
          <TaskItemTimeLeft>Starts in: {(new Date(data.starts_at)).getHours().toString()} hours</TaskItemTimeLeft>
          } 
          <TaskItemTimeLeft>Ends in: {(new Date(data.created_at)).getHours().toString()} hours</TaskItemTimeLeft>
          <TaskItemDesc>{data.task.desc}</TaskItemDesc>
        </TaskContentLeft>
        <TaskContentRight>
          <TaskItemEmission>
            <EmissionValue>{data.task.emission} kg</EmissionValue>
            <EmissionUnit>of CO2</EmissionUnit>
          </TaskItemEmission>
        </TaskContentRight>
        {
          isCommunityWorld && (
            <CommunityDoneBalloons>
              {usersDone.map((user) => (
                <CommunityDoneBalloon color={user.color} />
              ))}
            </CommunityDoneBalloons>
          )
        }
      </TaskItemContainer>
    </Draggable>
  );
};

interface CommunityDoneBalloonProps {
  color: string;
}

const CommunityDoneBalloon = styled.div<CommunityDoneBalloonProps>`
  width: 12px;
  height: 12px;
  margin-left: 8px;
  border-radius: 50%;
  background: ${(props) =>
    props.color === "violet" ? Colors.violet : Colors.orange};
`;

const CommunityDoneBalloons = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
`;

const EmissionUnit = styled(SmallData)`
  color: ${Colors.mdma};
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
  background: ${(props) => props.color};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0s linear;
  min-height: 164px;
`;
