//Import 3D placeholder image from assets folder and add it to background
import styled from "styled-components";
import Main3D from "./3d-elements/Main3D";

interface ForestProps {
  currentView: string;
}

export const ForestView = (props: ForestProps) => {
  return (
    <Container currentView={props.currentView}>
      <World currentView={props.currentView}>
        <Main3D />
      </World>
    </Container>
  );
};

const World = styled.div<ForestProps>`
  height: 70vh;
  position: absolute;
  transition: 0.7s;
  width: 100%;
  transform: scale(1.1);
  transition-timing-function: cubic-bezier(0.3, 0.1, 0.2, 0.3);
  top: ${(props) =>
    props.currentView === "stats"
      ? "50%"
      : props.currentView === "home"
      ? "25%"
      : "-7%"};
  opacity: ${(props) =>
    props.currentView === "stats"
      ? "1"
      : props.currentView === "home"
      ? "0.9"
      : "0.6"};
  margin: auto 0;
`;

const Container = styled.div<ForestProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: -1;
  overflow-x: hidden;
`;
