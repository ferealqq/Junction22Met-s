import styled from 'styled-components';
import { ForestView } from './components/ForestView';
import { useEffect, useState } from 'react';
import { HomeView } from './components/HomeView';
import { StatsView } from './components/StatsView';
import { TaskListView } from './components/TaskListView';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { TaskPage } from './components/TaskPage';
// import { QueryClient, QueryClientProvider } from 'react-query';

interface BGprops {
  currentView: string;
}

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/tasks', element: <TaskPage /> }
])

// const client = new QueryClient();

function App() {
  return (
    // <QueryClientProvider client={client}>
      <RouterProvider router={router}/>
    // </QueryClientProvider>
  );
}

function Home() {
  const [currentView, setCurrentView] = useState('stats');

  const handleScroll = (e: any) => {
    const { scrollTop } = e.target;

    if (scrollTop < 300) {
      setCurrentView('stats');
    } else if (scrollTop < 750) {
      setCurrentView('home');
    } else {
      setCurrentView('tasks');
    }
  }

  useEffect(() => {
    console.log('Current view: ', currentView);
  }, [currentView]);

  return (
  <MainView onScroll={handleScroll}> 
    <StatsView /> 
    <HomeView />
    <TaskListView />
    <ForestView currentView={currentView}/> 
    
    <BackgroundColor currentView={currentView}/>
  </MainView> 
  );
}

export default App;

const MainView = styled.div`
  scroll-snap-type: y mandatory;
  height: 100vh;
  overflow-y: scroll;
`;

const BackgroundColor = styled.div<BGprops>`
  background: linear-gradient(180deg, #FFF 0%, #D9F4FC 10%, #D9F4FC 30%, #89A38A 60%);
  height: 130vh; 
  width: 100%;
  position: fixed;
  top: ${props => props.currentView === 'stats' ? '30%' : props.currentView === 'home' ? '0%' : '-30%'};
  z-index: -2;
  transition: top ease-out 0.5s;
`; 