/**
 * @Author: Linyer honeyliner@163.com
 * @Date: 2023-08-15 14:53:45
 * @LastEditors: Linyer honeyliner@163.com
 * @LastEditTime: 2023-10-07 17:28:23
 * @FilePath: /vue2-components-demo/debug/vite.config.js
 * @Description:
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import VueJsx from '@vitejs/plugin-vue2-jsx';
import VueMacros from 'unplugin-vue-macros/vite';
import { alias } from '../config';

export default defineConfig({
  plugins: [
    VueMacros({
      setupComponent: false,
      setupSFC: false,
      plugins: {
        vue: vue(),
        vueJsx: VueJsx(),
      },
    }),
  ],
  resolve: {
    alias: {
      ...alias,
      '~@my-component/core': '@my-component/core',
    },
  },
});
