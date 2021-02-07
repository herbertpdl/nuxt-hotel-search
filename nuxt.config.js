export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt hotel search',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/index'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  i18n: {
    locales: ['en', 'pt_BR'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      defaultLocale: 'en'
    },
    langDir: 'lang/',
    lazy: true,
    locales: [
      {
        code: 'en',
        file: 'en.js'
      },
      {
        code: 'pt_BR',
        file: 'pt_BR.js'
      },
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
