import { defineStore } from "pinia"

const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: {},
  }),
})

const userSettings = defineStore({
  id: "user",
  prefersColorTheme: null,
})
export { useUserStore }
