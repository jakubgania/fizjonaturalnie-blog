const path = require("path");
const glob = require('glob')

const markdownPaths = ['blog']

const dynamicRoutes = getDynamicPaths({
  '/blog': '*.md'
})

const BASE_PATH = process.env.BASE_PATH || ''

export default {
  mode: 'universal',
  generate: {
    routes: dynamicRoutes
  },
  router: {
    base: BASE_PATH
  },
  manifest: {
    lang: 'pl',
    name: 'fizjonaturalnie.pl | Anna Maciejewska',
    description: '',
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#f06292",
    background_color: "#f06292"
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://fizjonaturalnie.pl/fizjonaturalnie-blog-logo.png'
      }
    ],
    link: [
      {
        rel: 'icon', type: 'image/x-icon', href: '/favicon.png'
      },
      {
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:ital@0;1&display=swap'
      },
      {
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Sacramento&display=swap'
      }
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
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
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
    // '@nuxtjs/markdownit'
  ],

  // markdownit: {
  //   html: true,
  //   injected: true,
  //   breaks: true
  // },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */

  pwa: {
    meta: {
      twitterCard: 'summary_large_image'
    },
    workbox: {
      assetsURLPattern: `${BASE_PATH}/_nuxt/`,
      pagesURLPattern: BASE_PATH,
      routerBase: BASE_PATH,
      publicPath: BASE_PATH
    }
  },

  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // add frontmatter-markdown-loader
      config.module.rules.push(
        {
          test: /\.md$/,
          include: path.resolve(__dirname, "content"),
          loader: "frontmatter-markdown-loader"
        }
      );
    }
  }
}

function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.md')}`);
    })
  );
}
