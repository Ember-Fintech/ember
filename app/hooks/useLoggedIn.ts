import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
interface LoggedInState {
  isLoggedIn: number
  changeLoggedInStatus: (by: boolean) => void
}

export const useLoggedIn = create<LoggedInState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      changeLoggedInStatus: (next) => set(() => ({ isLoggedIn: next })),
    }),
    { name: "logged-in-storage", storage: createJSONStorage(() => AsyncStorage) },
  ),
)
