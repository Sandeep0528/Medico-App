import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'


export default defineConfig({

  optimizeDeps: {
    exclude: ['os'],
    include: ['source-map-js'], // Prevent vite from trying to bundle path
  },
  plugins: [
    react(),

  ],
  server: { port: 5173 },

})



