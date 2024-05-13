import { create } from "zustand"

interface IUsePage {
    isVisible: boolean,
    setIsVisible: (page: boolean) => void
}

export const useAadharAuth = create<IUsePage>(
    (set) => ({
        isVisible: false,
        setIsVisible: (p) => set({ isVisible: p }),
    })
)
