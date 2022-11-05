import styled from 'styled-components';
import { Forest } from './components/Forest';

function App() {
  return (
  <MainView>
    <Forest /> 
  </MainView> 
  );
}

export default App;

const MainView = styled.div`
  background: linear-gradient(180deg, #FFF 0%, #D9F4FC 60%, #89A38A 100%);
  min-height: 100vh;
`;