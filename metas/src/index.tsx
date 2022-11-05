import ReactDOM from "react-dom/client";
import "./index.scss";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const useWorldModelStore = create(
  subscribeWithSelector((set) => ({
    personalModelNumber: 1,
    increasePopulation: () =>
      set((state: any) => ({
        personalModelNumber: state.personalModelNumber + 1,
      })),
    decreasePopulation: () =>
      set((state: any) => ({
        personalModelNumber: state.personalModelNumber - 1,
      })),
    isCommunityWorld: false,
    // If true, it's community world otherwise personal
    setWorldType: () =>
      set((state: any) => ({ isCommunityWorld: !state.isCommunityWorld })),
  }))
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
