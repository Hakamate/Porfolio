export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: false,

  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Thomas CLEMENT Développeur Web - Chef de projet IT',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Je suis développeur web / chef de projet IT. Passionné par la technologie et le monde qui l'entoure, j'aime m'investir dans de nombreux projets visant à répondre aux problématiques actuelles.",
      },
      {
        name: 'google-site-verification',
        content: 'xj2LWIb7oOXEfCgiTJhaT7-3ryNQZLTQCAA0fKiEgyk',
      },
      { name: 'Content-Language', content: 'fr' },
      { name: 'twitter:card', content: 'summary' },
      {
        name: 'twitter:site',
        content: 'https://thomas-clement.netlify.app',
      },
      {
        name: 'twitter:title',
        content: 'Développeur Freelance / Chef de projet IT - Thomas CLEMENT',
      },
      {
        name: 'twitter:description',
        content:
          "Je suis développeur web / chef de projet IT. Passionné par la technologie et le monde qui l'entoure, j'aime m'investir dans de nombreux projets visant à répondre aux problématiques actuelles.",
      },
      // image must be an absolute path
      {
        name: 'twitter:image',
        content: 'https://thomas-clement.netlify.app' + '/metaimage.jpg',
      },
      // Facebook OpenGraph
      {
        property: 'og:url',
        content: 'https://thomas-clement.netlify.app/',
      },
      {
        property: 'og:title',
        content: 'Développeur Freelance / Chef de projet IT - Thomas CLEMENT',
      },
      {
        property: 'og:site_name',
        content: 'Développeur Freelance / Chef de projet IT - Thomas CLEMENT',
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:image',
        content: 'https://thomas-clement.netlify.app' + '/metaimage.jpg',
      },
      {
        property: 'og:description',
        content:
          "Je suis développeur web / chef de projet IT. Passionné par la technologie et le monde qui l'entoure, j'aime m'investir dans de nombreux projets visant à répondre aux problématiques actuelles.",
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  loading: '~/components/PreLoading.vue',

  render: {
    // Setting up cache for 'static' directory - a year in milliseconds
    // https://web.dev/uses-long-cache-ttl
    static: {
      maxAge: 60 * 60 * 24 * 365 * 1000,
    },
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',

    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
    ['nuxt-lazy-load', {
      // These are the default values
      images: true,
    }],
    '@nuxtjs/robots'
  ],


  googleFonts: {
    families: {
      // a simple name
      Rubik: true,
    }
  },

  robots: {
    UserAgent: '*',
    Disallow: '',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // pwa: {
  //   manifest: {
  //     lang: 'fr'
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
