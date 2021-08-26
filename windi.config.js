import { defineConfig } from "windicss/helpers"
import colors from "windicss/colors"

export default defineConfig({
  attributify: true,
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-theme": "#f6f6f6",
        "dark-theme": "#0f172a",
        "color-txt-base": "#525252",
      },
    },
  },
})
