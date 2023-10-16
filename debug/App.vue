<!--
 * @Author: Linyer honeyliner@163.com
 * @Date: 2023-08-15 14:53:45
 * @LastEditors: Linyer honeyliner@163.com
 * @LastEditTime: 2023-10-07 17:10:50
 * @FilePath: /vue2-components-demo/debug/App.vue
 * @Description:
-->
<script setup>
const handleClick = (event) => {
  console.log(event);
};
</script>

<template>
  <div>
    <h1>组件调试</h1>
    <mc-button type="default" @click="handleClick">1234</mc-button>
    <mc-button type="primary" @click="handleClick">1234</mc-button>
  </div>
</template>

<style scoped></style>
