import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 8080,
    strictPort: true,
    hmr: {
      overlay: true
    },
    watch: {
      usePolling: true
    }
  }
})
