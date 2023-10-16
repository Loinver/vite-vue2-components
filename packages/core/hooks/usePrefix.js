/**
 * @Author: Linyer honeyliner@163.com
 * @Date: 2023-08-15 14:53:45
 * @LastEditors: Linyer honeyliner@163.com
 * @LastEditTime: 2023-09-25 10:00:00
 * @FilePath: /compoment-library-master/packages/core/hooks/usePrefix.js
 * @Description:
 */
import { computed } from 'vue'
import { defaultPrefix } from '@my-component/core/utils/config'

export const useDefaultPrefix = (name) => {
  return computed(() => {
    const defaultName = `${defaultPrefix}-${name}`
    return {
      defaultName,
      types: {
        isPrimary: `${defaultName}-primary`,
        isDefault: `${defaultName}-default`,
      },
    }
  })
}
