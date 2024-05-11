import { create } from "zustand"
type Receiver = {
  upiId: string
  name: string
  verified: boolean
  accountNumber: string
  bank: string
}
interface UpiTransaction {
  amount: number
  setAmount: (amt: number) => void
  receiver: Receiver | undefined
  setReceiver: (rec: Receiver | undefined) => void
  reset: () => void
}

export const useUpiTransaction = create<UpiTransaction>((set) => ({
  amount: 0,
  receiver: undefined,
  setAmount: (amt) => set(() => ({ amount: amt })),
  setReceiver: (rec) => set({ receiver: rec }),
  reset: () => set({ receiver: undefined, amount: 0 }),
}))
