import ReactDOM from "react-dom/client";
import "./index.scss";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { fetchCommunityData, fetchTasks, fetchUserData } from "./data/api";

export interface User {
  id: string;
  username: string;
  emission_saved: number;
}

export const useTaskStore = create(
  subscribeWithSelector((set) => ({
    tasks: [],
    fetchTasks: async () => {
      const tasks = await fetchTasks();
      set({ tasks });
    },
    setTasks: (tasks: any) => set({ tasks }),
  }))
);
export const useCommunityStore = create(
  subscribeWithSelector((set) => ({
    communityInfo: {},
    fetchCommunity: async (communityId: string) => {
      const userInfo = await fetchCommunityData(communityId);
      set({ userInfo });
    },
  }))
);
export const useUserInfoStore = create(
  subscribeWithSelector((set) => ({
    userInfo: { id: "", username: "", emission_saved: 0 },
    fetchUser: async (userId: string) => {
      const userInfo = await fetchUserData(userId);
      set({ userInfo });
    },
  }))
);

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
