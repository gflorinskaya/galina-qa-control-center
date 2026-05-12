import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/galina-qa-control-center/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
