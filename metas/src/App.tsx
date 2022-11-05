import styled from 'styled-components';

function App() {
  return (
  <MainView>
    <h1>Hello World</h1>
  </MainView> 
      
   
  );
}

export default App;

const MainView = styled.div`
  //Linear gradient from top to bottom from snow to iceage to base
  background: linear-gradient(180deg, #FFF 0%, #D9F4FC 100%, #89A38A 100%);
  
`;