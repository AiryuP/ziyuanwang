// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
      inlineSSRStyles: false,
  },
  modules: ['@element-plus/nuxt'],
  css: [
    '@/assets/font/iconfont.css',
    '@/assets/css/reset.css',
    '@/assets/css/public.css',
    'element-plus/dist/index.css',
    'element-plus/theme-chalk/display.css'
  ]
})
