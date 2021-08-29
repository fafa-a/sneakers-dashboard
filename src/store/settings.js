import { defineStore } from "pinia"

const useSettingsStore = defineStore({
  id: "settings",
  prefersColorTheme: null,
})
export { useSettingsStore }
