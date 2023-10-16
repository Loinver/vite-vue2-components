/**
 * @Author: Linyer honeyliner@163.com
 * @Date: 2023-10-12 16:23:58
 * @LastEditors: Linyer honeyliner@163.com
 * @LastEditTime: 2023-10-13 17:26:13
 * @FilePath: /vue2-components-demo/docs/.vuepress/enhanceApp.js
 * @Description:
 */
import MyComponent from '@my-component/core';
import Demo from './components/Demo.vue';
import '@my-component/core/style/index.scss';
// 注册全局组件
export default ({ Vue, options, router, siteData }) => {
  // 将全局组件注册到 Vue 实例
  Vue.use(MyComponent);
  Vue.component('Demo', Demo);
};
