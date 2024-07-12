import { create } from "zustand";

export const useAdminStore = create((set) => ({
  activeCard: "",
  setActiveCard: (state: string) => set({ activeCard: state }),
}));
