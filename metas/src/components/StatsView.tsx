import styled from "styled-components";
import { useEffect, useState } from "react";
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

export const StatsView = () => {
  const [data, setData] = useState<any | null>(null);
  const [success, setSuccesss] = useState(false);
  useEffect(() => {
    fetchAnalytics().then((data: any) => {
      console.log(data);
      setData(data);
      setSuccesss(true);
    });
  }, []);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  return (
    <Container>
      <StatsText>
        <WOWW>Wow!</WOWW>
        <WOWBody>
          You have saved up to 300kg of CO2 this week compared to average Finn..
        </WOWBody>
      </StatsText>
      <Statistics>
        <Bar
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top" as const,
              },
            },
          }}
          data={{
            datasets: [
              {
                label: "Dataset 1",
                data: 1,
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
              {
                label: "Dataset 2",
                data: 2,
                backgroundColor: "rgba(53, 162, 235, 0.5)",
              },
            ],
          }}
        />
      </Statistics>
    </Container>
  );
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

const Statistics = styled.div`
  width: 95%;
  height: 40vh;
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
