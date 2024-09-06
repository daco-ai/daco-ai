import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  page: 0,
  setPage: (newPage) => set({ page: newPage }),
  increasePage: () => set((state) => ({ page: state.page + 1 })),
  decreasePage: () => set((state) => ({ page: state.page - 1 })),
  resetPage: () => set({ page: 0 }),
  score: [
    { category: "유수분 밸런스", score: [0, 0, 0, 0] },
    { category: "피부 민감도", score: [0, 0, 0, 0] },
    { category: "멜라닌 색소 활성도", score: [0, 0, 0, 0] },
    { category: "피부 탄력도 및 주름", score: [0, 0, 0, 0] },
  ],
  setScore: (newScore) => set({ score: newScore }),
});

const useStore = create(devtools(store));

export default useStore;
