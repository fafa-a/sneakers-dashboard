import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

import WindiCSS from "vite-plugin-windicss"
import ViteComponents from "vite-plugin-components"
const path = require("path")

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue({
      script: {
        refSugar: true,
      },
    }),
    WindiCSS(),
    ViteComponents(),
  ],
})
