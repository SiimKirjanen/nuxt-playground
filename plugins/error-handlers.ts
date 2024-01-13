export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    console.log('nuxtApp.vueApp.config.errorHandler');
  };

  // Also possible
  nuxtApp.hook('vue:error', (error, instance, info) => {
    console.log('vue:error');
  });
});
