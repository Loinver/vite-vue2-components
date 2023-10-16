<!--
 * @Author: Linyer honeyliner@163.com
 * @Date: 2023-08-15 14:53:45
 * @LastEditors: Linyer honeyliner@163.com
 * @LastEditTime: 2023-10-14 17:22:02
 * @FilePath: /vue2-components-demo/docs/.vuepress/components/Demo.vue
 * @Description:
-->
<script setup>
import { reactive, ref } from 'vue';
const files = require.context('../../demos', true, /\.vue$/);
const demos = reactive({});

files.keys().forEach((key) => {
  const module = files(key);
  const componentName = key.substring(2, key.lastIndexOf('.vue')); // 提取从第二个字符到倒数第一个'.'之间的部分

  demos[componentName] = module.default;
});
const props = defineProps({
  code: String,
  componentAddress: String,
});
const isShow = ref(false);
</script>

<template>
  <div class="docs-demo">
    <div class="docs-demo-component">
      <component :is="demos[props.componentAddress]" />
    </div>
    <div
      class="docs-demo-code language-vue-html"
      :class="{
        'is-show': isShow,
      }"
      v-html="code"
    />
    <div class="docs-demo-footer">
      <span class="demo-footer-button" @click="isShow = !isShow">{{ isShow ? '隐藏' : '显示' }}代码</span>
    </div>
  </div>
</template>

<style scoped>
.docs-demo {
  border: 1px solid #3c3c431f;
  border-radius: 4px;
}
.docs-demo .docs-demo-component {
  padding: 24px;
}
.docs-demo .docs-demo-code {
  margin: 0;
  border-radius: 0;
  height: 0;
  overflow: hidden;
}
.docs-demo .is-show {
  height: auto;
}
.docs-demo .docs-demo-footer {
  padding: 5px;
  text-align: center;
  border-top: 1px solid #3c3c431f;
}
.docs-demo .docs-demo-footer .demo-footer-button {
  font-size: 14px;
  transition: 0.3s;
  cursor: pointer;
  color: var(--vp-carbon-ads-text-color);
}
.docs-demo .docs-demo-footer .demo-footer-button:hover {
  color: #3eaf7c;
}
</style>
