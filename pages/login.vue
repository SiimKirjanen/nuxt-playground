<script setup lang="ts">
const { status, data, signIn, signOut } = useAuth();
</script>
<template>
  <div>
    <UButton @click="signIn">Sign in</UButton>
  </div>
</template>

<style scoped></style>
