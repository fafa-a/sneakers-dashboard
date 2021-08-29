<template>
  <div>
    <h2 text="lg color-txt-base" font="medium" p="b-2">Default theme</h2>
    <span>
      <label for="dark" text="color-txt-base" p="r-2">Dark</label>
      <input type="radio" id="dark" value="dark" v-model="picked" />
    </span>
    <span m="l-1">
      <label for="light" text="color-txt-base" p="r-2">Light</label>
      <input type="radio" id="light" value="light" v-model="picked" />
    </span>
  </div>
</template>

<script setup>
import { watchEffect } from "vue-demi"
let picked = $ref("")
const emit = defineEmits(["colorTheme"])
watchEffect(() => emit("colorTheme", picked))
</script>

<style lang="scss" scoped></style>
