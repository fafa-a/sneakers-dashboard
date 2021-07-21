  
import Home from "../pages/Home.vue"

import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    alias: "/home",
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export { router }
