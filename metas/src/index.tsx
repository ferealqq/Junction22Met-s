import ReactDOM from "react-dom/client";
import "./index.scss";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const useWorldModelStore = create(
  subscribeWithSelector((set) => ({
    modelNumber: 1,
    increasePopulation: () =>
      set((state: any) => ({ modelNumber: state.modelNumber + 1 })),
    decreasePopulation: () =>
      set((state: any) => ({ modelNumber: state.modelNumber - 1 })),
    zeroOut: () => set({ modelNumber: 0 }),
  }))
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
