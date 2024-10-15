// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Irelene",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: "title", content: "Irelene - Full-stack Developer Portfolio" },
        {
          name: "description",
          content:
            "I enjoy building impactful web solutions, from simple websites to complex apps.",
        },
        {
          name: "robots",
          content: "noindex, nofollow",
        },
      ],
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-svgo'],
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  googleFonts: {
    display: 'swap',
    families: {
      Itim: true,
      Bitter: [300, 400, 500, 900],
      'Space Grotesk': true
    }
  }
})