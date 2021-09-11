<template>
  <div bg="light-theme dark:dark-theme" p="3">
    <h1 text="xl true-gray-600" font="bold">Search</h1>
    <SearchInput @keywordSend="search" />
    <div v-if="isLoading">
      <Card :data="sneaker" />
    </div>
    <p>hello</p>
  </div>
</template>

<script setup>
import axios from "redaxios"
let sneaker = $ref({})
let isLoading = $ref(false)
let href = $ref("")
let dataSize = $ref({})
let sizeArray = $ref({})
const stores = ["stockx", "goat", "flight club", "klekt"]

const getResults = async (query) => {
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
  const response = await axios.get(
    `https://stockx.com/api/products/${href}?includes=market`
  )
  const { data } = response
  const products = data.Product.children
  const keys = Object.keys(products)

  const result = keys.map((key) => {
    const variants = {}
    variants.size = Number(products[key].shoeSize)
    variants.price = products[key].market.lowestAsk
    return variants
  })
  console.log(result)
  sizeArray = result
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
