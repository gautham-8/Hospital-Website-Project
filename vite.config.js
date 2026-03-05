import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  build: {
    outDir: 'build'  // keeps server.js serving from ./build without changes
  },
  server: {
    proxy: {
      '/user-api': 'http://localhost:4000',
      '/appointment-api': 'http://localhost:4000'
    }
  }
})
