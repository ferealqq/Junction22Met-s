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
  const [user, setUser] = useState({ name: "Jaakko" });
  const isCommunityWorld = useWorldModelStore(
    (state: any) => state.isCommunityWorld
  );
  const toggleWorldType = useWorldModelStore(
    (state: any) => state.toggleWorldType
  );
  const [communityOpen, setCommunityOpen] = useState(false);

  return (
    <Container>
      <ForestBar>
        <Titles active={currentView == "home"}>
          <SubTitle>
            {isCommunityWorld ? "Community Forest" : "Private Forest"}
          </SubTitle>
          <Title>{user.name}</Title>
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

      <CommunityHub
        open={communityOpen}
        closeCommunity={() => setCommunityOpen(false)}
      />
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
