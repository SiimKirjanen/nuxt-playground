<script setup lang="ts">
function someErrorLogger(err: unknown) {
  console.log("got an error", err);
}
</script>

<template>
  <div class="grid gap-4 grid-cols-4">
    <div>
      <h4>Errors</h4>
      <ExamplesErrorThrowing />
    </div>
    <div>
      <NuxtErrorBoundary @error="someErrorLogger">
        <h4>Errors surrounded with NuxtErrorBoundary</h4>
        <ExamplesErrorThrowing />
        <template #error="{ error, clearError }">
          <p>An error happened.</p>
          <UButton @click="clearError">This will clear the error.</UButton>
        </template>
      </NuxtErrorBoundary>
    </div>
  </div>
</template>
