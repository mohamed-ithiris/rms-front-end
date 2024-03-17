import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";
import { authActions, authInitialValue, authState } from "./auth";

export type initialState = {
  count: number;
  name: string;
};

export type initialActions = {
  decrementCount: () => void;
  incrementCount: () => void;
  changeName: (value: string) => void;
};

const initialValue = {
  count: new Date().getFullYear(),
  name: "e3s",
};

// all States
export type AllState = initialState & authState;
// all Actions
export type AllActions = initialActions & authActions;
// add all States and all Actions
export type ConfigStore = AllState & AllActions;

const storevalue = { ...initialValue, ...authInitialValue };

export const initialStoreValue = (): AllState => {
  return storevalue;
};

export const defaultInitState: AllState = storevalue;

export const createZustandStore = (initState: AllState = defaultInitState) => {
  return createStore<ConfigStore>()(
    devtools(
      persist(
        (set) => ({
          ...initState,
          decrementCount: () => set((state) => ({ count: state.count - 1 })),
          incrementCount: () => set((state) => ({ count: state.count + 1 })),
          changeName: (value: string) => set(() => ({ name: value })),
          setTokens: (accessToken: string, refreshToken: string) =>
            set(() => ({
              accessToken: accessToken,
              refreshToken: refreshToken,
            })),
          setAccessToken: (accessToken: string) =>
            set(() => ({ accessToken: accessToken })),
          setRefreshToken: (refreshToken: string) =>
            set(() => ({ refreshToken: refreshToken })),
        }),
        {
          name: "rms-storage",
        }
      )
    )
  );
};
