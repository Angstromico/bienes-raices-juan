// plugins/globalLinks.js
export default defineNuxtPlugin((nuxtApp) => {
  const links = ['about', 'advertisements', 'blog', 'contact']
  nuxtApp.provide('links', links) // Inject links globally
})
