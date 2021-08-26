<template>
  <div flex="col">
    <IconHome
      :squarre="squarre"
      :leftBorder="leftBorder"
      :identifier="identifier"
    />
    <IconSearch
      :squarre="squarre"
      :leftBorder="leftBorder"
      :identifier="identifier"
    />
    <IconAlert
      :squarre="squarre"
      :leftBorder="leftBorder"
      :identifier="identifier"
    />
    <IconMarket
      :squarre="squarre"
      :leftBorder="leftBorder"
      :identifier="identifier"
    />
    <IconUser
      :squarre="squarre"
      :leftBorder="leftBorder"
      :identifier="identifier"
    />
    <IconSettings
      :squarre="squarre"
      :leftBorder="leftBorder"
      :identifier="identifier"
    />
  </div>
</template>

<script setup>
// import IconHome from "./IconHome.vue"
// import IconSearch from "./IconSearch.vue"
// import IconAlert from "./IconAlert.vue"
// import IconMarket from "./IconMarket.vue"
// import IconUser from "./IconUser.vue"
// import IconSettings from "./IconSettings.vue"

defineProps({
  squarre: {
    type: Number,
    required: true,
  },
  identifier: {
    type: String,
    required: true,
  },
  leftBorder: {
    type: Number,
  },
})
</script>

<style scoped></style>
