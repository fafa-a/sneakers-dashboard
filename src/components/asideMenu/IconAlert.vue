<template>
  <router-link
    :to="{ path: `/alert` }"
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
        <path
          d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"
        ></path>
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
