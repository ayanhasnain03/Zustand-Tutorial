import { create } from "zustand";

interface CounterState {
  count: number;
  inc: () => void;
  dec: () => void;
}

export const useCounter = create<CounterState>((set) => ({
  count: 0,

  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: Math.max(state.count - 1, 0) })),
  //Math.max(state.count - 1, 0) ensures that the new count is not less than 0. Math.max
}));
