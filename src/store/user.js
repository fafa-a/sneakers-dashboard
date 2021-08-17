import { defineStore } from "pinia"

const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: {},
  }),
})

export { useUserStore }
