import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { VitePWA } from 'vite-plugin-pwa';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  publicDir: 'public',

  build: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: {
          enabled: true
        },
        manifest: {
          name: 'DolanTegal App',
          short_name: 'Dolan Tegal',
          description: 'This is my Progressive Web App',
          theme_color: '#ffffff',
          icons: [
            {
              src: 'icon-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'icon-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      }),
    ],
    
    outDir: 'dist',
    
    assetsInlineLimit: 4096,

    assetsCaching: true,

    assetsInclude: ['public/assets/**'],

    assetsExclude: ['node_modules', 'src'],

    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tentang: resolve(__dirname, 'public/view/Menu/tentang.html'),
        destinasi: resolve(__dirname, 'public/view/Menu/destinasi.html'),
        favorit: resolve(__dirname, 'public/view/Menu/favorit.html'),
        guci: resolve(__dirname, 'public/view/Destination/guci.html'),
        cacaban: resolve(__dirname, 'public/view/Destination/cacaban.html'),
        pai: resolve(__dirname, 'public/view/Destination/pai.html'),
        prabanlintang: resolve(__dirname, 'public/view/Destination/prabanlintang.html'),
        curug: resolve(__dirname, 'public/view/Destination/curug.html'),
        waterpark: resolve(__dirname, 'public/view/Destination/waterpark.html'),
      }
    }
  }
});
