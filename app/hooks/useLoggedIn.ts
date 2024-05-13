import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export const useLoggedIn = create(
  persist(
    (set) => ({
      isLoggedIn: true,
      changeLoggedInStatus: () => set((state) => ({ isLoggedIn: !state.isLoggedIn })),
    }),
    {
      name: "logged-in-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      onRehydrateStorage: (state) => {
        console.log("hydration starts", state)

        // optional
        return (state, error) => {
          if (error) {
            console.log("an error happened during hydration", error)
          } else {
            console.log("hydration finished")
          }
        }
      },
    },
  ),
)
