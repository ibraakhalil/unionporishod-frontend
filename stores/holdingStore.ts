import { UserInfoType } from "@/types/holding";
import { create } from "zustand";

type State = {
  userInfo: UserInfoType | null;
  count: number;
  loading: boolean;
  error: any;
  setUserInfo: (info: any) => void;
  setLoading: (isLoading: boolean) => void;
};

export const useHoldingStore = create<State>((set) => ({
  // Initial states
  userInfo: null,
  count: 0,
  loading: false,
  error: null,

  // Actions
  setUserInfo: (info) => set({ userInfo: info, error: null, loading: false }),
  setLoading: (isLoading) =>
    set({ loading: isLoading, error: null, userInfo: null }),
  setError: (error: any) => set({ error, userInfo: null, loading: false }),
}));
