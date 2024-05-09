import { create } from 'zustand'

export const useLoggedIn = create((set) => ({
  isLoggedIn: true,
  changeLoggedInStatus: () => set((state) => ({ isLoggedIn: !state.isLoggedIn })),
}))

