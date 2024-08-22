import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  page: 0,
  increasePage: () => set((state) => ({ page: state.page + 1 })),
  resetPage: () => set({ page: 0 }),
});

const useStore = create(devtools(store));

export default useStore;
