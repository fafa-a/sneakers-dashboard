<template>
  <router-link
    :to="{ path: `/market` }"
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
        <line x1="4" y1="21" x2="4" y2="14"></line>
        <line x1="4" y1="10" x2="4" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12" y2="3"></line>
        <line x1="20" y1="21" x2="20" y2="16"></line>
        <line x1="20" y1="12" x2="20" y2="3"></line>
        <line x1="1" y1="14" x2="7" y2="14"></line>
        <line x1="9" y1="8" x2="15" y2="8"></line>
        <line x1="17" y1="16" x2="23" y2="16"></line>
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
