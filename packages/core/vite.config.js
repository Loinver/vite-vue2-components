/**
 * @Author: Linyer honeyliner@163.com
 * @Date: 2023-08-15 14:53:45
 * @LastEditors: Linyer honeyliner@163.com
 * @LastEditTime: 2023-10-07 17:38:25
 * @FilePath: /vue2-components-demo/packages/core/vite.config.js
 * @Description:
 */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue2';
import VueJsx from '@vitejs/plugin-vue2-jsx';
import VueMacros from 'unplugin-vue-macros/vite';
import { alias } from '../../config';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    // ...
  },
  plugins: [
    VueMacros({
      setupBlock: true,
      namedTemplate: false,
      setupSFC: true,
      booleanProp: true,
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.setup\.[cm]?[jt]sx?$/],
        }),
        vueJsx: VueJsx(),
      },
    }),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    target: 'es2015',
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: 'myComponent',
      fileName: 'my-component',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias,
  },
});
