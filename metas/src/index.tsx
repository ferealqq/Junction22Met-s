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
      const token = (useUserInfoStore.getState() as any).token;
      const tasks = await fetchTasks(token.jwt);
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
      const token = (useUserInfoStore.getState() as any).token;
      const communities = await fetchCommunityData(token.jwt);
      set({ communities });
    },
  }))
);
export const useUserInfoStore = create(
  subscribeWithSelector((set, get) => ({
    token: getCookie('token'),
    userInfo: { id: "", username: "", emission_saved: 0 },
    fetchUser: async (userId: string) => {
      const tok = (get() as any).token;
      setCookie('token', tok.jwt);
      
      const userInfo = await fetchUserData(tok.jwt);
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
