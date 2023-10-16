<!--
 * @Author: Linyer honeyliner@163.com
 * @Date: 2023-08-15 14:53:45
 * @LastEditors: Linyer honeyliner@163.com
 * @LastEditTime: 2023-10-07 17:21:41
 * @FilePath: /vue2-components-demo/packages/core/components/button/button.vue
 * @Description:
-->
<script setup>
import { useDefaultPrefix } from '@my-component/core/hooks/usePrefix';
import { defaultComponentPrefix } from '@my-component/core/utils/config';

const props = defineProps({
  type: String,
});
const emits = defineEmits(['click']);
defineOptions({
  name: `${defaultComponentPrefix}Button`,
});
const className = useDefaultPrefix('button');
const handleClick = (event) => {
  emits('click', event);
};
</script>

<template>
  <button
    :class="[
      className.defaultName,
      {
        [className.types.isPrimary]: props.type === 'primary',
        [className.types.isDefault]: props.type !== 'primary',
      },
    ]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
