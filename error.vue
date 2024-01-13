<script setup>
const error = useError();
</script>

<template>
  <NuxtLayout>
    <div>
      <h1>Dang</h1>
      <p class="font-bold">
        {{ error.message }}
      </p>
      <p>It looks like something broke.</p>
      <p>Sorry about that.</p>
    </div>
  </NuxtLayout>
</template>
