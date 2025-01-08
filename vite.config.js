import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1164, // Adjust the limit as needed
  },
  assetsInclude: ['**/*.glb'],
});