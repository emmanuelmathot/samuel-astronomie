import { defineConfig } from '@slidev/cli'

export default defineConfig({
  // GitHub Pages deployment configuration
  router: {
    mode: 'hash'
  },
  build: {
    base: process.env.NODE_ENV === 'production' ? '/samuel-astronomie/' : '/'
  }
})