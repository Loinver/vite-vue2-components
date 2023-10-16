/**
 * @Author: Linyer honeyliner@163.com
 * @Date: 2023-08-15 14:53:45
 * @LastEditors: Linyer honeyliner@163.com
 * @LastEditTime: 2023-09-25 10:00:43
 * @FilePath: /compoment-library-master/packages/core/rollup.config.js
 * @Description:
 */
import path from 'path'
import multiInput from 'rollup-plugin-multi-input'
import styles from 'rollup-plugin-styles'

export default [
  {
    input: ['components/**/style/index.scss', 'style/index.scss'],
    plugins: [
      multiInput.default(),
      styles({
        mode: ['extract'],
        alias: {
          '@my-component/core': path.resolve('./'),
        },
        minimize: true,
      }),
    ],
    output: {
      dir: 'dist/',
      assetFileNames: '[name].css',
    },
  },
]
