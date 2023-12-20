<script setup lang="ts"></script>

<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/" class="font-bold">Nuxt Playground</NuxtLink>
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
        <li><NuxtLink to="/tasks">Tasks</NuxtLink></li>
        <li><NuxtLink to="/examples">Examples</NuxtLink></li>
        <li><NuxtLink to="/swr">SWR</NuxtLink></li>
        <li><NuxtLink to="/isr">ISR</NuxtLink></li>
        <li><NuxtLink to="/spa">SPA</NuxtLink></li>
        <li><NuxtLink to="/protected">Protected page</NuxtLink></li>
        <li><NuxtLink to="/login">Login</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
