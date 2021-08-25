<template>
  <main flex="~" h="screen" class="dark">
    <Menu
      bg="light-400 dark:blue-gray-900"
      w="5vw"
      :squarre="squarre"
      :identifier="identifier"
      :leftBorder="leftBorder"
    />
    <RouterView w="65vw" bg="light-400 dark:blue-gray-900" />
    <UserActivity bg="light-400 dark:blue-gray-900" w="30vw" />
  </main>
</template>

<script setup>
const squarre = 5
const identifier = "vw"
const leftBorder = 0.2
// import Menu from "./components/asideMenu/Menu.vue"
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.classList.add("dark")
} else {
  document.documentElement.classList.add("light")
}
</script>
