// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    image: {
        // The screen sizes predefined by `@nuxt/image`:
        screens: {
          xs: 320,
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
          xxl: 1536,
          '2xl': 1536
        },
      },
    modules: [
        '@nuxt/image-edge',
        '@nuxt/content'
      ]
})
