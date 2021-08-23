<template>
  <router-link
    :to="{ path: `/user` }"
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
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
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
