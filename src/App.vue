<template>
  <main>
    <Menu />
    <div
      position="absolute"
      left="85px"
      top="85px"
      w="1818px"
      h="screen"
      bg="blue-gray-100"
    >
      <RouterView />
    </div>
  </main>
</template>

<script setup>
import Menu from "./components/asideMenu/Menu.vue"
</script>
