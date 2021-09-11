<template>
  <main flex="~" h="screen">
    <Menu
      bg="light-theme dark:dark-theme"
      w="5vw"
      :squarre="squarre"
      :identifier="identifier"
      :leftBorder="leftBorder"
    />
    <RouterView w="65vw" />
    <UserActivity w="30vw" />
  </main>
</template>

<script setup>
import { setPefersColorTheme } from "@/utils/colorTheme"
import { useSettingsStore } from "@/store/settings"

const store = useSettingsStore()
const squarre = 5
const identifier = "vw"
const leftBorder = 0.2

setPefersColorTheme()
store.prefersColorTheme = localStorage.getItem("prefersColorTheme")
</script>
