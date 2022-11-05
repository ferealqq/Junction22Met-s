import ReactDOM from "react-dom/client";
import "./index.scss";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const useWorldModelStore = create(
  subscribeWithSelector((set) => ({
    personalModelNumber: 1,
    communityModelNumber: 1,
    increaseCommunityPopulation: () =>
      set((state: any) => ({
        communityModelNumber: state.communityModelNumber + 1,
      })),
    decreaseCommunityPopulation: () =>
      set((state: any) => ({
        communityModelNumber: state.communityModelNumber - 1,
      })),
    increasePersonalPopulation: () =>
      set((state: any) => ({
        personalModelNumber: state.personalModelNumber + 1,
      })),
    decreasePersonalPopulation: () =>
      set((state: any) => ({
        personalModelNumber: state.personalModelNumber - 1,
      })),
    isCommunityWorld: false,
    setCommunityWorld: () => set({ isCommunityWorld: true }),
    // If true, it's community world otherwise personal
    toggleWorldType: () =>
      set((state: any) => ({ isCommunityWorld: !state.isCommunityWorld })),
  }))
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
