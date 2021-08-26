<template>
  <router-link
    :to="{ path: `/user` }"
    flex="~ row"
    bg="hover:blue-gray-400 dark:hover:blue-gray-400"
    class="size"
  >
    <div class="border-active"></div>
    <div class="rest-of-squarre" flex="~" align="items-center" justify="around">
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
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
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
let bgColorActive = $ref("#94a3b8")
let colorActive = $ref("#0CF574")
let svgColor = $ref("#525252")
</script>
<style scoped>
.size {
  width: v-bind(squarreSize);
  height: v-bind(squarreSize);
}
.border-active {
  width: v-bind(borderLeft);
  height: v-bind(squarreSize);
}
.rest-of-squarre {
  width: v-bind(restOfSquarre);
  height: v-bind(squarre);
}
.active {
  background-color: v-bind(bgColorActive);
}
.active > div.border-active {
  background-color: v-bind(colorActive);
}
.active > div > svg {
  stroke: v-bind(colorActive);
}
</style>
