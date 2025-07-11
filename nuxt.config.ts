// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxthub/core',
    'nuxt-auth-utils'
  ],
  hub: {
    database: true,
    blob: true
  }
})