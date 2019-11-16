const { resolve } = require('path')

module.exports = {
  mode: 'universal',
  dev: process.env.NODE_ENV === 'development',
  srcDir: resolve(__dirname, '..', 'resources'),
  /*
  ** Headers of the page
  */
  head: {
    title: 'Confox | App de conexão dos focus.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/sass/settings',
    'vue-multiselect/dist/vue-multiselect.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/global-components',
    '~/plugins/vee-validate',
    '~/plugins/format',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',


    '@nuxtjs/axios',


    '@nuxtjs/style-resources',

    '@nuxtjs/auth'
  ],


  auth: {
    redirect: {
      login: '/user/login',
      home: '/groups'
    },

    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/user/auth', method: 'POST', propertyName: 'token'},
          logout: false,
          user: false,
        },
      }
    }
  },

  router: {
    middleware: ['auth']
  },
  /*
  ** Build configuration
  */
  build: {
    // Add exception
    transpile: [
      "vee-validate/dist/rules"
    ],


    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  styleResources: {
    scss: [
      '@/assets/sass/settings.scss',
    ]
  }
}
