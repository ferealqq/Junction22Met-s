import styled from "styled-components";
import { ForestView } from "./components/ForestView";
import { useRef, useState, useEffect } from "react";
import { HomeView } from "./components/HomeView";
import { StatsView } from "./components/StatsView";
import { TaskListView } from "./components/TaskListView";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TaskPage } from "./components/TaskPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useWorldModelStore } from "./index";
// import { QueryClient, QueryClientProvider } from 'react-query';

interface BGprops {
  currentView: string;
}

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/tasks", element: <TaskPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

function Home() {
  const unsub3 = useWorldModelStore.subscribe(
    (state: any) => state.personalModelNumber,
    (num: any, previousNum: any) =>
      num > previousNum &&
      toast.success("Great job! You just decreased your ...", {
        toastId: "success1",
      })
  );
  const [currentView, setCurrentView] = useState("stats");

  const handleScroll = (e: any) => {
    const { scrollTop } = e.target;

    if (scrollTop < 300) {
      setCurrentView("stats");
    } else if (scrollTop < 750) {
      setCurrentView("home");
    } else {
      setCurrentView("tasks");
    }
  };

  return (
    <MainView onScroll={handleScroll}>
      <ToastContainer />
      <StatsView />
      <HomeView currentView={currentView} />
      <TaskListView currentView={currentView} />
      <ForestView currentView={currentView} />

      <BackgroundColor currentView={currentView} />
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
  background: linear-gradient(
    180deg,
    #fff 0%,
    #d9f4fc 10%,
    #d9f4fc 30%,
    #89a38a 60%
  );
  height: 130vh;
  width: 100%;
  position: fixed;
  top: ${(props) =>
    props.currentView === "stats"
      ? "30%"
      : props.currentView === "home"
      ? "0%"
      : "-30%"};
  z-index: -2;
  transition: top ease-out 0.5s;
`;
