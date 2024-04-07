// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/content'
  ],
  content: {
    highlight: {
      theme: 'dracula',
    },
  },
  devtools: { enabled: false },
  css: [
    'bootstrap/dist/css/bootstrap.min.css', 
    '@/assets/css/main.css',
    '@/assets/css/color.css'
  ],
  vite: {
    define: {
      'process.env.DEBUG': false
    },
    build: {
      chunkSizeWarningLimit: 1600
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript',
        },
        // {
        //   src: '@/assets/js/script.js',
        //   type: 'text/javascript',
        // },
      ],
    },
  },

  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  }
})
