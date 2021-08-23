import { createRouter, createWebHistory } from "vue-router"

import Releases from "@/pages/Releases.vue"

const routes = [
  {
    path: "/",
    name: "Releases",
    component: Releases,
  },
  {
    path: "/alert",
    name: "Alert",
    component: () => import("@/pages/Alert.vue"),
  },
  {
    path: "/market",
    name: "Market",
    component: () => import("@/pages/Market.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("@/pages/Search.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import("@/pages/User.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("@/pages/Settings.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
})
export { router }
