import ReactDOM from "react-dom/client";
import "./index.scss";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { fetchCommunityData, fetchTasks, fetchUserData, getCookie, setCookie } from "./data/api";

export interface User {
  id: string;
  username: string;
  emission_saved: number;
}

export const useTaskStore = create(
  subscribeWithSelector((set) => ({
    tasks: [],
    fetchTasks: async () => {
      const tasks = await fetchTasks("");
      set({ tasks });
      return Promise.resolve(tasks);
    },
    setTasks: (tasks: any) => set({ tasks }),
  }))
);
export const useCommunityStore = create(
  subscribeWithSelector((set) => ({
    communities: {},
    fetchCommunity: async () => {
      const communities = await fetchCommunityData("");
      set({ communities });
    },
    setCommunities: (communities:any) => {
      set({communities})
    } 
  }))
);
export const useUserInfoStore = create(
  subscribeWithSelector((set, get) => ({
    token: getCookie('token') || undefined,
    userInfo: { id: "", username: "", emission_saved: 0 },
    fetchUser: async (userId: string) => {
      const userInfo = await fetchUserData("");
      set({ userInfo });
    },
    setToken: (token: string) => set({ token }),
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
