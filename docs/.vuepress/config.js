/**
 * @Author: Linyer honeyliner@163.com
 * @Date: 2018-07-01 15:40:48
 * @LastEditors: Linyer honeyliner@163.com
 * @LastEditTime: 2023-10-14 17:20:16
 * @FilePath: /vue2-components-demo/docs/.vuepress/config.js
 * @Description:
 */
const fs = require('fs');
const path = require('path');

module.exports = {
  title: '组件库',
  description: '组件库文档',
  palette: path.resolve(__dirname, 'palette.styl'),
  port: '5100',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '组件',
        link: '/components/',
      },
    ],
    sidebar: {
      // 配置侧边栏部分
      '/components/': [
        {
          title: '使用指南',
          collapsable: true,
          path: '/components/',
        },
        {
          title: 'Button 按钮',
          path: '/components/button',
        },
      ],
    },
  },
  markdown: {
    extendMarkdown: (md) => {
      md.set({ breaks: true });
      md.use(require('markdown-it-container'), 'demo', {
        validate: (params) => {
          return !!params.trim().match(/^demo\s*(.*)$/);
        },
        render(tokens, idx) {
          if (tokens[idx].nesting === 1) {
            const componentAddress = tokens[idx + 2]?.content || '';
            let code = '';
            if (tokens[idx + 2].type === 'inline') {
              code = fs.readFileSync(path.resolve('./demos', `./${componentAddress}.vue`), 'utf-8');
            }
            return `<Demo
            code="${md.utils.escapeHtml(
              md.options.highlight(code, 'html', ''),
            )}" componentAddress="${componentAddress}" >`;
          }
          return '</Demo>';
        },
      });
    },
  },
  alias: {
    '@my-component/core': path.resolve(__dirname, '../../packages/core'),
  },
};
