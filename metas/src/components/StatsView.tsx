import { format } from "date-fns";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import { Colors } from "../styles/colors";
import { SmallBold, WOW } from "./text";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchAnalytics } from "../data/api";
import { BackSide } from "three";
import Draggable from "react-draggable";

const barColors = [Colors.base, Colors.sins, Colors.mdma];

export const StatsView = () => {
  const [posData, setPosData] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState<string>("#FFF");
  const draggableBox = useRef();

  const handleDrag = (event: any) => {
    //@ts-ignore
    const xChange = draggableBox.current.getBoundingClientRect().x;
    console.log("dragg");
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
      //Task deleted
      // removeTask(data.id);
      // decrease();
      setPosData({ x: 0, y: 0 });
    } else if (xChange > 205) {
      //Trigger task completion
      // removeTask(data.id);
      // increase();
      setPosData({ x: 0, y: 0 });
    } else {
      console.log("reset");
      setPosData({ x: 0, y: 0 });
    }
    setColor("#FFF");
  };

  return (
    <Container>
      <StatsText>
        <WOWW>Wow!</WOWW>
        <WOWBody>
          You have saved up to 300kg of CO2 this week compared to average Finn..
        </WOWBody>
      </StatsText>
      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={posData}
        scale={1}
        onDrag={handleDrag}
        onStop={handleStop}
      >
        <Statistics ref={draggableBox}>
          <EmissionChart/>
        </Statistics>
      </Draggable>
    </Container>
  );
};

const EmissionChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const [data, setData] = useState<any[] | null>(null);
  const [success, setSuccesss] = useState(false);
  useEffect(() => {
    fetchAnalytics().then((data: any) => {
      console.log(data);
      setData(data);
      setSuccesss(true);
    });
  }, []);
  if (success && data && data.length > 0) {
    return (
      <Bar
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          elements: {
            line: {
              fill: false,
              stepped: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
              },
            },
            y: {
              grid: {
                display: false,
                drawBorder: false,
              },
              title: {
                padding: 30099,
              },
            },
          },
        }}
        data={{
          labels: data.map((item) => format(new Date(item["date"]), "EE")),
          datasets: [
            {
              data: data.map((item) => parseInt(item["emissions_saved"])),
              backgroundColor: [
                Colors.sins,
                Colors.base,
                Colors.mdma,
                Colors.sins,
                Colors.base,
                Colors.mdma,
                Colors.sins,
              ],
              maxBarThickness: 25,
            },
          ],
        }}
      />
    );
  } else {
    return null;
  }
};

const WOWW = styled(WOW)`
  margin-right: 1rem;
`;

const WOWBody = styled(SmallBold)`
  color: ${Colors.analgreen};
`;

const StatsText = styled.div`
  position: absolute;
  color: ${Colors.analgreen};
  top: 36px;
  left: 0;
  margin: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Statistics = styled.div<any>`
  width: 85%;
  height: 25vh;
  background: ${Colors.snow};
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid ${Colors.analgreen};
`;

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: red opacity(30%);
  height: 70vh;
  scroll-snap-align: start;
  position: relative;
`;
