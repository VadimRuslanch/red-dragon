import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Checker from 'vite-plugin-checker';
import path from 'path';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [vue(), svgLoader(), Checker({ typescript: true, vueTsc: true })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
