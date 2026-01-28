import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   includeAssets: ['logo.png'],
    //   manifest: {
    //     name: "I Giarratano Parrucchieri",
    //     short_name: "Giarratano",
    //     description: "Taglio e colore su misura a Sant'Ambrogio di Torino",
    //     theme_color: '#f7f4ee',
    //     background_color: '#f7f4ee',
    //     display: 'standalone',
    //     icons: [
    //       { src: 'logo.png', sizes: '192x192', type: 'image/png' },
    //       { src: 'logo.png', sizes: '512x512', type: 'image/png' }
    //     ]
    //   }
    // }),
  ],
  build: {
    target: 'es2015', // Ensure compatibility with older mobile browsers
  },
  base: '/',
  server: {
    host: true, // Ascolta su tutte le interfacce
    allowedHosts: true, // Permetti tutti gli host (per tunnel)
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
