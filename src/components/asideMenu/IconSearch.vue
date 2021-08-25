<template>
  <router-link
    :to="{ path: `/search` }"
    flex="~ row"
    bg="hover:red-300 dark:hover:blue-gray-400"
    class="size"
  >
    <div :w="borderLeft" h="full" class="red"></div>
    <div
      :w="restOfSquarre"
      h="full"
      flex="~"
      align="items-center"
      justify="around"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        :stroke="svgColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from "vue-demi"

const props = defineProps({
  squarre: {
    type: Number,
    required: true,
  },
  leftBorder: {
    type: Number,
  },
  identifier: {
    type: String,
    required: true,
  },
})
const restOfSquarre = computed(
  () => (props.squarre - props.leftBorder).toString() + props.identifier
)

const squarreSize = computed(() => props.squarre.toString() + props.identifier)
const borderLeft = computed(
  () => props.leftBorder.toString() + props.identifier
)
let bgColor = $ref("#94a3b8")
let color = $ref("#0f172a")
let svgColor = $ref("#dde1e3")
</script>
<style scoped>
.size {
  width: v-bind(squarreSize);
  height: v-bind(squarreSize);
}
.active {
  background-color: v-bind(bgColor);
}
.active > div.red {
  background-color: v-bind(color);
}
.active > div > svg {
  stroke: v-bind(color);
}
</style>
