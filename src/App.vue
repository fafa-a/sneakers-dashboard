<template>
  <main flex="~" h="screen">
    <Menu
      bg="light-400 dark:blue-gray-900"
      w="5vw"
      :squarre="squarre"
      :identifier="identifier"
      :leftBorder="leftBorder"
    />
    <RouterView w="65vw" bg="light-400 dark:blue-gray-900" p="3" />
    <UserActivity w="30vw" />
  </main>
</template>

<script setup>
const squarre = 5
const identifier = "vw"
const leftBorder = 0.2
// import Menu from "./components/asideMenu/Menu.vue"
</script>
