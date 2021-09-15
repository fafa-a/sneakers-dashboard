<template>
  <table flex="~" max-w="full">
    <span flex="col">
      <thead>
        <tr border="1px solid dark-50">
          <th colspan="2">Shop</th>
        </tr>
      </thead>
      <tbody>
        <tr border="1px solid dark-50" h="51px">
          <td>StockX</td>
        </tr>
      </tbody>
    </span>
    <span v-for="(item, index) in sizes" :key="index">
      <thead>
        <tr border="1px solid dark-50">
          <th colspan="2">{{ item.size }}</th>
        </tr>
      </thead>
      <tbody>
        <tr border="1px solid dark-50">
          <td>{{ item.price }} $ {{ Math.floor(item.price * 0.85) }} €</td>
        </tr>
      </tbody>
    </span>
  </table>
</template>

<script setup>
defineProps({
  sizes: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
