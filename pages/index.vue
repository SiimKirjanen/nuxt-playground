<script lang="ts" setup>
definePageMeta({ auth: false });
const { data, status, getCsrfToken, getProviders } = useAuth();

const providers = await getProviders();
const csrfToken = await getCsrfToken();
</script>

<template>
  <h1 class="text-3xl font-bold">{{ $t('welcome') }}</h1>
  <p>Examples of Nuxt usage</p>
  <div>
    <h3 class="text-xl font-bold">Authentication Overview</h3>
    <p class="text-sm">
      See all available authentication & session information below.
    </p>
    <pre v-if="status"><span>Status:</span> {{ status }}</pre>
    <pre v-if="data"><span>Data:</span> {{ data }}</pre>
    <pre v-if="csrfToken"><span>CSRF Token:</span> {{ csrfToken }}</pre>
    <pre v-if="providers"><span>Providers:</span> {{ providers }}</pre>
  </div>
  <div>
    <NuxtImg src="/audi.jpg" format="avif" sizes="sm:100vw md:400px lg:80vw" />
    <NuxtImg src="/audi.jpg" sizes="sm:100vw md:400px lg:80vw" />
  </div>
</template>
