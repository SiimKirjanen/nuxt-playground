<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <header class="shadow-sm bg-white">
    <div class="container mx-auto p-4 flex">
      <NuxtLink :to="localePath('/')" class="font-bold">{{
        $t('nuxt_playground')
      }}</NuxtLink>

      <ul class="flex gap-4 ml-auto">
        <li>
          <NuxtLink :to="localePath('/')">{{ $t('home') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/products')">{{
            $t('products')
          }}</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/tasks')">{{ $t('tasks') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/examples')">{{
            $t('examples')
          }}</NuxtLink>
        </li>
        <li><NuxtLink to="/swr">SWR</NuxtLink></li>
        <li><NuxtLink to="/isr">ISR</NuxtLink></li>
        <li><NuxtLink to="/spa">SPA</NuxtLink></li>
        <li><NuxtLink to="/protected">Protected page</NuxtLink></li>
        <li><NuxtLink to="/prerender">Prerender page</NuxtLink></li>
        <li><NuxtLink to="/login">Login</NuxtLink></li>
      </ul>
      <select v-model="locale" class="ml-12">
        <option value="en">en</option>
        <option value="ee">ee</option>
      </select>
    </div>
  </header>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
