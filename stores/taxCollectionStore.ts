import { create } from "zustand";

export const useTaxCollectionStore = create((set) => ({
  isLoading: false,
}));
