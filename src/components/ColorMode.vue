<template>
  <button @click="toggleTheme" outline=":focus:none">
    <div v-if="dark">
      <!-- moon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        :stroke="svgColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </div>
    <div v-else>
      <!-- sun -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        :stroke="svgColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path
          d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
        />
      </svg>
    </div>
  </button>
</template>

<script setup>
import { computed } from "vue-demi"

let dark = $ref(false)
const toggleTheme = () => {
  dark = !dark
  if (dark) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}

let color = $ref("#525252")
const svgColor = computed(() => (color = dark ? "#0f17" : "#525252"))
</script>

<style lang="scss" scoped></style>
