import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/@fortawesome/fontawesome-free/webfonts',
          dest: 'assets',
        },
      ],
    }),
  ],
  server: {
    fs: {
      allow: ['.']
    },
  },
  build: {
    outDir: 'build',
  },
});
