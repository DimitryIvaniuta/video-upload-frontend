/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';


export default defineConfig(async () => {
  const { default: checker } = await import('vite-plugin-checker');
    return {

  root: __dirname,
  cacheDir: './node_modules/.vite/video-upload',

  server: {
    port: 4200,
    host: 'localhost',
    hmr: {
      overlay: true // this should be true (default)
    }
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [
      react(),
      checker({
        typescript: true,
      }),
      nxViteTsPaths(),
      nxCopyAssetsPlugin(['*.md']),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: './dist/video-upload',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}});
