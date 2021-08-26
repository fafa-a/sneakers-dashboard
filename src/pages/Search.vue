<template>
  <div>
    <h1 text="xl true-gray-600" font="bold">Search</h1>
    <SearchInput @keywordSend="search" />
    <div v-if="isLoading">
      <Card :data="sneaker" />
    </div>
  </div>
</template>

<script setup>
let sneaker = $ref({})
let isLoading = $ref(false)
let href = $ref("")
let dataSize = $ref({})
const stores = ["stockx", "goat", "flight club", "klekt"]

const getResults = async (query) => {
  console.log("ok")
  const url = "https://serverless-api.fafaa.workers.dev"
  // const url = "http://127.0.0.1:8787"

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: { "Content-Type": "application/json" },
  })
  return res.json()
}

const getSize = async () => {
  const url = `https://stockx.com/api/products/${href}?includes=market`
  const res = await fetch(url, { method: "GET" })
  return res.json()
}

const search = async (key) => {
  const results = await getResults(key)
  sneaker = results
  isLoading = true
  href = sneaker.Products[0].urlKey
  dataSize = await getSize()
}
</script>

<style lang="scss" scoped></style>
