// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@pinia/nuxt",
    "@nuxt/ui",
    "@sidebase/nuxt-auth",
    "@nuxt/test-utils/module",
  ],
  auth: {
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: "authjs",
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
  routeRules: {
    /*     "/": { prerender: true }, */
    "/swr": { swr: 3600 },
    "/isr": { isr: true },
    "/spa": { ssr: false },
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    authSecret: process.env.AUTH_SECRET,
  },
});
