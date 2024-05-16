import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
interface IUsePage {
  page: number
  stepsDone: Array<ESteps>
  setPage: (page: number) => void
  setSetpsDone: (steps: Array<ESteps>) => void
}

export enum ESteps {
  SELFIE = "SELFIE",
  PAN = "PAN",
  AADHAR = "AADHAR",
  BANK_KYC = "BANK_KYC",
}

export const usePage = create<IUsePage>()(
  persist(
    (set) => ({
      page: 0,
      stepsDone: [],
      setPage: (p) => set({ page: p }),
      setSetpsDone: (steps) => set({ stepsDone: steps }),
      clear: () => set({ page: 0, stepsDone: [] }),
    }),
    { name: "logged-in-storage", storage: createJSONStorage(() => AsyncStorage) },
  ),
)
