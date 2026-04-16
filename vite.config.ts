import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/reasoning': {
        target: 'http://rabini.org:5000', // Backend server
        changeOrigin: true, // Ensure the request appears to come from the frontend server
        rewrite: (path) => path.replace(/^\/reasoning/, 'generate'), // Optional: Remove '/api' prefix,
        
      },
    },
  },
  plugins: [react()],
})
