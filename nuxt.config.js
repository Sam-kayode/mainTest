export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dashboard',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/v-dropdown-menu.js',
    '~/plugins/date-picker.js',
    { src: '~/plugins/chart.js', mode: 'client' },
    './plugins/vuex-persistedstate',
    './plugins/axios',
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/app.scss', 'normalize.css'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
    '@nuxtjs/cloudinary',
  ],
  bootstrapVue: {
    icons: true,
  },

  styleResources: {
    // your settings here
    scss: ['@/assets/scss/_variables.scss', '@/assets/scss/_responsive.scss'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios

  axios: {
    baseURL: 'https://smart-api-v3.herokuapp.com/api/v1/',
  },

  build: {},
  cloudinary: {
    cloudName: 'sam-kay',
  },
  serverMiddleware: ['~/middleware/redirects.js'],
}
