import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // permite conexiones externas
    allowedHosts: ['.ngrok-free.app'], // permite cualquier subdominio de ngrok
  },
});
