
import styled from 'styled-components';
import { Forest } from './components/Forest';
import { HomeView } from './components/HomeView';
import { StatsView } from './components/StatsView';
import { TaskListView } from './components/TaskListView';

function App() {
  return (
  <MainView>
    <StatsView /> 
    <HomeView />
    <TaskListView />

    <Forest /> 
    <BackgroundColor />
  </MainView> 
  );
}

export default App;

const MainView = styled.div`
  scroll-snap-type: y mandatory;
  height: 100vh;
  overflow-y: scroll;
`;

const BackgroundColor = styled.div`
  background: linear-gradient(180deg, #FFF 0%, #D9F4FC 10%, #89A38A 30%);
  height: 100%; 
  width: 100%;
  position: fixed;
  top: 0;
  z-index: -2;
`; 