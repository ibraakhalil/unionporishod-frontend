import { create } from "zustand";

type State = {
  userInfo: userInfo | null;
  count: number;
  loading: boolean;
  setUserInfo: (info: any) => void;
  setLoading: (isLoading: boolean) => void;
};

export const useHoldingStore = create<State>((set) => ({
  // Initial states
  userInfo: null,
  count: 0,
  loading: false,

  // Actions
  setUserInfo: (info) => set({ userInfo: info }),
  setLoading: (isLoading) => set({ loading: isLoading }),
}));
