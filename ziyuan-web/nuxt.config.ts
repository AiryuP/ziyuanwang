// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt'],
  css: [
    'element-plus/dist/index.css',
    'element-plus/theme-chalk/display.css'
  ]
})
