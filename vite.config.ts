import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  base: '/website/',
  server: {
    port: 3000,
    open: false,
  },
});
