// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxt/image'],
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
    baseUrl: 'https://nuxt-angstromico.netlify.app/',
  },
  css: [
    // SCSS file in the project
    '~/assets/css/main.scss', // you should add main.scss somewhere in your app
  ],
  image: {
    format: ['webp'],
    dir: 'assets/images',
  },
  plugins: [
    '~/plugins/globalLinks.ts', // Register your plugin here
  ],
})