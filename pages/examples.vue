<script setup lang="ts">
    function someErrorLogger(err: unknown) {
        console.log('got an error', err);
    }
</script>

<template>
    <div class="grid gap-4 grid-flow-col">
        <div>
            <ExamplesErrorThrowing />
        </div>
        <div>
            <NuxtErrorBoundary @error="someErrorLogger">
                <ExamplesErrorThrowing />
                <template #error="ctx">An error happened.</template>
            </NuxtErrorBoundary>
        </div>
    </div>
</template>