const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: 'basic',
      children: [
        { text: 'Button 按钮', link: '/components/basic/button/' },
        { text: 'Link 文字链接', link: '/components/basic/link/' },
        { text: 'Layout 布局', link: '/components/basic/layout/' },
      ]
    },
    { text: 'form',
      children: [
        { text: 'Input 输入框', link: '/components/form/input/' },
      ]
    },
  ]
}
const config = {
  title: "🔨 GdUI",
  description: "GdUI组件库",
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: md => {
      // 添加DemoBlock插槽
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      md.use(demoBlockPlugin);
    }
  },
  base: "/gzdl-admin/"
};

export default config;
