import DemoBlockPlugin from "vitepress-theme-demoblock";
import { defineConfig } from "vitepress";

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
        { text: 'Input-Number数字输入框', link: '/components/form/input-number/' },
        { text: 'Radio单选框', link: '/components/form/radio/' },
      ]
    },
  ]
};
const environmentPath = process.argv.slice(2).includes("dev") ? "" : "/gzdl-admin/";
const config = {
  title: "🔨 GdUI",
  description: "GdUI组件库",
  themeConfig: {
    sidebar,
  },
  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark"
    },
    config: md => {
      // 添加DemoBlock插槽
      const { demoBlockPlugin } = DemoBlockPlugin; 
      md.use(demoBlockPlugin);
    }
  },
  base: environmentPath,
};

export default defineConfig(config);
