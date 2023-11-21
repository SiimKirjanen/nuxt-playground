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
    <div>
        <UButton @click="onClick">Throw custom fatal error</UButton>
    </div>
</template>