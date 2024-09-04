import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        theme_color: '#412203',
        background_color: '#f69435',
        display: 'standalone',
        orientation: 'any',
        name: 'Story App',
        short_name: 'Story',
        description: 'Story Creator Application, custom boilerplate',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      onwarn(warning, defaultHandler) {
        if (warning.code === 'SOURCEMAP_ERROR') {
          return;
        }

        defaultHandler(warning);
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      public: path.resolve(__dirname, 'public/'),
    },
  },
  logLevel: 'info',
  server: {
    host: 'localhost',
    port: 4000,
  },
});
