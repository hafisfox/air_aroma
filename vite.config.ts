import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode, isSsrBuild}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    build: isSsrBuild
      ? undefined
      : {
          rollupOptions: {
            output: {
              manualChunks: {
                'react-vendor': ['react', 'react-dom', 'react-router-dom'],
                animation: ['motion'],
                i18n: ['i18next', 'react-i18next'],
              },
            },
          },
        },
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    ssr: {
      noExternal: ['motion', 'react-helmet-async'],
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
