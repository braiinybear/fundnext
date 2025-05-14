import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  assetsInclude: ['**/*.JPG', '**/*.JPEG', '**/*.jpg'],
  server: {
    host: '0.0.0.0', // or use your IP like '192.168.1.100'
    port: 5173
  }
});
