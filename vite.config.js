import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  assetsInclude: ['**/*.glb'],
});