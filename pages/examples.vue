<script setup lang="ts">
const counter = useState('counter', () => Math.round(Math.random() * 1000));
function someErrorLogger(err: unknown) {
  console.log('got an error', err);
}
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <div>
      <h4>Errors</h4>
      <ExamplesErrorThrowing />
    </div>

    <div>
      <NuxtErrorBoundary @error="someErrorLogger">
        <h4>Errors surrounded with NuxtErrorBoundary</h4>
        <ExamplesErrorThrowing />
        <template #error="{ error, clearError }">
          <p>An error happened. {{ error }}</p>
          <UButton @click="clearError">This will clear the error.</UButton>
        </template>
      </NuxtErrorBoundary>
    </div>

    <div>
      Counter: {{ counter }}
      <UButton @click="counter++">+</UButton>
      <UButton @click="counter--">-</UButton>
    </div>

    <div>
      <ClientOnly fallback-tag="span" fallback="Loading client only...">
        <h2>Hey hey client only</h2>
      </ClientOnly>
    </div>
  </div>
  <div class="mt-6 border-2 border-solid border-indigo-600 p-3">
    <h3>Tailwind playground</h3>
  </div>
</template>
