<template>
  <router-link
    :to="{ path: `/alert` }"
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
        <path
          d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"
        ></path>
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
