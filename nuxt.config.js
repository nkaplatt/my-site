module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nick Platt',
    meta: [
      { charset: 'utf-8' },
      { lang: 'en', 'data-n-header': 'lang' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My personal website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat|Raleway' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /* build in SPA mode */
  // mode: 'spa',
  /* custom modules by me */
  modules: [
    ['@nuxtjs/google-analytics'],
    '@nuxtjs/pwa'
  ],
 'google-analytics': {
    id: 'UA-111662480-1'
  },
  /* PWA settings */
  workbox: {
    importScripts: [
      'custom-sw.js'
    ],
  },
  manifest: {
    name: 'Nick Platt',
    lang: 'en',
    short_name: "Nick Platt",
    start_url: "/",
    display: "standalone",
    background_color: "#BFA694",
    description: "My personal website",
  },
  icon: {
    iconSrc: '~/assets/images/mobile/pwa-logo-fill.png'
  }
}

