import { format } from "date-fns";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Colors } from "../styles/colors";
import { SmallBold, WOW } from "./text";
import { Bar,Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchEmissionAnalytics, fetchSpendingAnalytics } from "../data/api";
import { useUserInfoStore } from "..";

const barColors = [Colors.base, Colors.sins, Colors.mdma];

export const StatsView = () => {
  const token = useUserInfoStore((state: any) => state.token);
  const [emissionData, setEmissionData] = useState<any[] | null>(null);
  const [spendingData, setSpendingData] = useState<any[] | null>(null);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    fetchEmissionAnalytics(token.jwt).then((data: any) => {
      setEmissionData(data);
      setSuccess(true);
    });
    fetchSpendingAnalytics(token.jwt).then((data: any) => {
      setSpendingData(data);
      setSuccess(true);
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
      
      <StatisticsWrapper>

      <StatWrapper>
      <StatsText>
        <WOWW>Wow!</WOWW>
        <WOWBody>
          You have saved up to 300kg of CO2 this week compared to average Finn..
        </WOWBody>
      </StatsText>
      <Statistics>
        {success && emissionData && emissionData?.length > 0 ? (
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
              labels: emissionData.map((item) => format(new Date(item["date"]), "EE")),
              datasets: [
                {
                  data: emissionData.map((item) => parseInt(item["emissions_saved"])),
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
      </StatWrapper>


      <StatWrapper>
      <StatsText>
        <WOWW>Wow!</WOWW>
        <WOWBody>
          You have saved up to 300kg of CO2 this week compared to average Finn..
        </WOWBody>
      </StatsText>
      <Statistics>
        {success && spendingData && spendingData?.length > 0 ? (
          <Bar
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
              },
              // elements: {
              //   line: {
              //     fill: false,
              //     stepped: false,
              //   },
              // },
              // scales: {
              //   x: {
              //     grid: {
              //       display: false,
              //       drawBorder: false,
              //     },
              //   },
              //   y: {
              //     grid: {
              //       display: false,
              //       drawBorder: false,
              //     },
              //     title: {
              //       padding: 30099,
              //     },
              //   },
              // }
            }}
            data={{
              labels: spendingData.map((item) => format(new Date(item["date"]), "EE")),
              datasets: [
                {
                  data: spendingData.map((item) => parseInt(item["money_saved"])),
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
      </StatWrapper> 
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
  color: ${Colors.analgreen};
  left: 0;
  margin: 0 32px;
  margin-top: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StatWrapper = styled.div`
  scroll-snap-align: center;
  width: 85vw;
  flex-shrink: 0;
  margin: 0 calc((100% - 85vw) / 2);
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
  height: 25vh;
  background: ${Colors.snow};
  border-radius: 20px;
  margin-top: 42px;
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
