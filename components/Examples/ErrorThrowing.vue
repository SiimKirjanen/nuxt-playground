<script setup lang="ts">
const onClick = () => {
  throw createError({
    statusCode: 500,
    statusMessage: 'You did just throw and Error!',
    fatal: true
  });
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <UButton @click="onClick"
      >Throw custom fatal error using createError</UButton
    >
    <UButton @click="showError('lala')"
      >Throw custom fatal error using showError</UButton
    >
  </div>
</template>
