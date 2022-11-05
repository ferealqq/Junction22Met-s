import styled from 'styled-components';
import Main3D from './components/3d-elements/Main3D';


function App() {
  return (
      <MainView>
          <h1>Hello World</h1>
          <ThreeView id="threeView">
            <Main3D/>
          </ThreeView>
      </MainView>
  );
}

export default App;

const MainView = styled.div`
  //Linear gradient from top to bottom from snow to iceage to base
  background: linear-gradient(180deg, #FFF 0%, #D9F4FC 100%, #89A38A 100%);
  
`;

const ThreeView = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50vw;
  //radial gradient from center to edge from iceage to white
  background: radial-gradient(50% 50% at 50% 50%, #dbebff 0%, #FFF 100%);
  z-index: -1;
`;
