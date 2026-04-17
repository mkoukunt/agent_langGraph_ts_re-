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
      '/findApi': {
        target: 'http://rabini.org:5001', // Backend server
        changeOrigin: true, // Ensure the request appears to come from the frontend server
        rewrite: (path) => path.replace(/^\/findApi/, 'generate'), // Optional: Remove '/api' prefix,
        
      },
      '^/fetchData/.*': {
        target: 'https://crexnmsdev1.solint.net/ns-api/v2', // Backend server
        changeOrigin: true, // Ensure the request appears to come from the frontend server
        rewrite: (path) => path.replace(/^\/fetchData/, ''), // Optional: Remove '/api' prefix,
        
      },
    },
  },
  plugins: [react()],
})
