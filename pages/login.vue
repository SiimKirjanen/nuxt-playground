<script setup lang="ts">
const { status, signIn, signOut } = useAuth();
</script>
<template>
  <div>
    <UButton v-if="status === 'unauthenticated'" @click="signIn"
      >Sign in</UButton
    >
    <UButton v-if="status === 'authenticated'" @click="signOut"
      >Sign out</UButton
    >
  </div>
</template>

<style scoped></style>
