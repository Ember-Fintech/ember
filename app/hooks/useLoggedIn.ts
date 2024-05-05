import { create } from 'zustand'

export const useLoggedIn = create((set) => ({
  isLoggedIn: false,
  changeLoggedInStatus: () => set((state) => ({ isLoggedIn: !state.isLoggedIn })),
}))

