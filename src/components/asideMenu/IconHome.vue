<template>
  <router-link
    :to="{ path: `/` }"
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
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
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
let colorActive = $ref("#0f17")
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
