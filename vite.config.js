import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact(),  tailwindcss()],
  server: {
    allowedHosts: [
      '58b3-2409-40e3-5005-38c5-2d33-6828-1074-21e0.ngrok-free.app',
      
    ],
  },
})

