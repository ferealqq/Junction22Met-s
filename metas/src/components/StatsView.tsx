import { format } from "date-fns";
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

const barColors = [Colors.base, Colors.sins, Colors.mdma];

export const StatsView = () => {
  const [data, setData] = useState<any[] | null>(null);
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
      <StatisticsWrapper>
      <Statistics>
        {success && data && data?.length > 0 ? (
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
        ) : (
          "Loading..."
        )}
      </Statistics>
      <Statistics>
        {success && data && data?.length > 0 ? (
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
        ) : (
          "Loading..."
        )}
      </Statistics>

      </StatisticsWrapper>
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

const StatisticsWrapper = styled.div`
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  position: relative;
  display: flex;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Statistics = styled.div`
  scroll-snap-align: center;
  width: calc(85vw);
  height: 25vh;
  flex-shrink: 0;
  background: ${Colors.snow};
  border-radius: 20px;
  margin: 0 calc((100% - 85vw) / 2);
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
