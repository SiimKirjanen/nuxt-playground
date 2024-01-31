<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="`${product.image}`" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="my-7 text-4xl">{{ product.title }}</h2>
        <p class="my-7 text-xl">Price - ${{ product.price }}</p>
        <h3 class="mb-4 border-b-2 pb-2 font-bold">Product description:</h3>
        <p class="mb-7">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(['product']);
</script>

<style scoped>
img {
  max-width: 400px;
}
</style>
