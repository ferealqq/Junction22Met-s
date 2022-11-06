import styled from "styled-components";
import { useState } from "react";
import { Headline, SmallBold } from "./text";
import { Colors } from "../styles/colors";
import { useWorldModelStore } from "../index";
import { CommunityHub } from "./CommunityHub";

interface HomeViewProps {
  currentView: string;
}

export const HomeView = ({ currentView }: HomeViewProps) => {
  const [users, setUsers] = useState([
    {
      id: "3fa85f64-5737-4562-b3fc-2c963f66afa6",
      username: "Jaakko",
      emissions_saved: 6969,
      created_at: new Date("2022-11-06T00:54:54.178Z"),
      updated_at: new Date("2022-11-06T00:54:54.178Z"),
    },
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      username: "Pekka",
      emissions_saved: 2200,
      created_at: new Date("2022-11-06T00:53:54.178Z"),
      updated_at: new Date("2022-11-06T00:54:54.178Z"),
    },
    {
      id: "3fa85f64-3717-4562-b3fc-2c963f66afa6",
      username: "Juuso",
      emissions_saved: 200,
      created_at: new Date("2022-11-06T00:52:54.178Z"),
      updated_at: new Date("2022-11-06T00:54:54.178Z"),
    }
  ]);
  const isCommunityWorld = useWorldModelStore(
    (state: any) => state.isCommunityWorld
  );
  const toggleWorldType = useWorldModelStore(
    (state: any) => state.toggleWorldType
  );
  const [communityOpen, setCommunityOpen] = useState(false);

  const createForest = () => {
    console.log("Forest created");
    setCommunityOpen(false);
  };

  return (
    <Container>
      <ForestBar>
        <Titles active={currentView == "home"}>
          <SubTitle>
            {isCommunityWorld ? "Community Forest" : "Private Forest"}
          </SubTitle>
          <Title>{isCommunityWorld ? users.map((user, index) => (
            <>{user.username}{index !== (users.length - 1) && ', '}</>
          )): <>{users[0].username}</>}</Title>
        </Titles>
        <CommunityButton
          active={currentView == "home"}
          isCommunity={isCommunityWorld}
          onClick={() => {
            !isCommunityWorld ? setCommunityOpen(true) : toggleWorldType();
          }}
        >
          <CommunityText isCommunity={isCommunityWorld}>
            {isCommunityWorld ? "Home Forest" : "Community"}
          </CommunityText>
        </CommunityButton>
      </ForestBar>
      
      <CommunityHub createForest={createForest} open={communityOpen} closeCommunity={() => setCommunityOpen(false)}/>
    </Container>
  );
};

const CommunityText = styled(SmallBold)<{ isCommunity: boolean }>`
  color: ${(props) => (props.isCommunity ? Colors.analgreen : Colors.snow)};
`;

const CommunityButton = styled.button<{
  active: boolean;
  isCommunity: boolean;
}>`
  border-radius: 12px;
  border: ${(props) =>
    props.isCommunity ? `3px solid ${Colors.analgreen}` : "none"};
  background: ${(props) =>
    props.isCommunity ? "transparent" : Colors.analgreen};
  padding: 1rem 2rem;
  outline: none;
  transition: 0.6s;
  transform: ${(props) =>
    props.active ? "translateX(0)" : "translateX(200%)"};
`;

const SubTitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 8px;
`;

const Title = styled(Headline)`
  left: 0;
`;

const Titles = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  transition: 0.6s;
  transform: translateX(${(props) => (props.active ? 0 : -200)}%);
`;

const ForestBar = styled.div`
  position: absolute;
  top: 64px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 64px;
`;

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  overflow: hidden;
`;
