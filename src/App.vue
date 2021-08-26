<template>
  <main flex="~" h="screen">
    <Menu
      bg="light-theme dark:dark-theme"
      w="5vw"
      :squarre="squarre"
      :identifier="identifier"
      :leftBorder="leftBorder"
    />
    <RouterView w="65vw" bg="light-theme dark:dark-theme" p="3" />
    <UserActivity w="30vw" />
  </main>
</template>

<script setup>
const squarre = 5
const identifier = "vw"
const leftBorder = 0.2
// import Menu from "./components/asideMenu/Menu.vue"
</script>
