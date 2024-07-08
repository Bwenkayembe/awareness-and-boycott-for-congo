import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/awareness-and-boycott-for-congo/',  // this should match your GitHub repository name
  build: {
    outDir: 'dist'
  }
});

