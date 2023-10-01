// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'netlify'
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Oswald: true,
    }
  },
  css: [
    'lite-youtube-embed/src/lite-yt-embed.css'
  ],
  plugins: ['@/plugins/youtube.client.js'],
  vue: {  
    compilerOptions: {
      isCustomElement: (tag) => ['lite-youtube'].includes(tag),
    },
  }
})
