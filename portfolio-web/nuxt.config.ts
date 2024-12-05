// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/theme.css'],
  compatibilityDate: '2024-11-01',

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: ['@nuxtjs/tailwindcss']
})