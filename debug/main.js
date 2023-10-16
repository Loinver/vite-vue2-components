/**
 * @Author: Linyer honeyliner@163.com
 * @Date: 2023-08-15 14:53:45
 * @LastEditors: Linyer honeyliner@163.com
 * @LastEditTime: 2023-10-07 17:07:35
 * @FilePath: /vue2-components-demo/play/main.js
 * @Description:
 */
import Vue from 'vue';
import MyComponent from '@my-component/core/index';
import '@my-component/core/style/index.scss';
import App from './App.vue';

Vue.use(MyComponent);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
