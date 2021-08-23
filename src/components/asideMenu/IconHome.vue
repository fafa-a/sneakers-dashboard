<template>
  <router-link
    :to="{ path: `/` }"
    w="85px"
    h="85px"
    flex="~ row"
    bg="hover:red-300"
  >
    <div w="4px" h="full" class="red"></div>
    <div w="81px" h="full" flex="~" align="items-center" justify="around">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
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

<script setup></script>
<style lang="postcss" scoped>
.active {
  @apply bg-red-300;
}
.active > div.red {
  @apply bg-red-600;
}
.active > div > svg {
  stroke: red;
}
</style>
