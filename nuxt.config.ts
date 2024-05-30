// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Дополнительные материалы к курсу',
      link: [
        {
          rel: 'stylesheet',
          href: '/fonts/fonts.css',
        }
      ]
    }
  },
  ssr: true,
  nitro: {
    prerender: {
      failOnError: false, 
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    ['@pinia/nuxt', {
      autoImports: [
        // automatically imports `defineStore`
        'defineStore', // import { defineStore } from 'pinia'
        // automatically imports `defineStore` as `definePiniaStore`
        ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
      ],
    }],
  ],
  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'github-dark',
      }
    }
  },
  image: {
    quality: 80,
    format: ['avif', 'webp', 'png', 'jpg'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },
})
