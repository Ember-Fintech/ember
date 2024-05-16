import { create } from "zustand"

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

export const usePage = create<IUsePage>((set) => ({
  page: 0,
  stepsDone: [],
  setPage: (p) => set({ page: p }),
  setSetpsDone: (steps) => set({ stepsDone: steps }),
}))
