<template>
  <div bg="light-theme dark:dark-theme" p="3">
    <h1 text="xl color-txt-base" font="bold">Settings</h1>
    <Theme bg="light-theme dark:dark-theme" p="3" @colorTheme="setColorTheme" />
  </div>
</template>

<script setup>
import { setPefersColorTheme } from "@/utils/colorTheme"
import { useSettingsStore } from "@/store/settings"

const store = useSettingsStore()

const setColorTheme = (arg) => {
  if (arg !== "") {
    localStorage.setItem("prefersColorTheme", arg)
    setPefersColorTheme()
    store.prefersColorTheme = arg
  }
}
</script>

<style lang="scss" scoped></style>
