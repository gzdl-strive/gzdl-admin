# 🔨 gd-ui-vite Introduce
一个Mini版的基于Vue的UI组件库，通过Vite构建.

## Features

- ⚡️ Vue3, Vite4, pnpm
- 🦾 TypeScript, of course
- 🗂 File based routing
- ⚙️ Unit Testing with Vitest
- 😃 Eslint + Prittier + CommitLint
- 🎨 UnoCSS - the instant on-demand atomic CSS engine
- 🚘 CI/CD with Github-Actions
- 📜 Docs built through Github-Pages

## Install

```bash
# 选择一个您喜欢的包管理器

# NPM
npm install gd-ui-vite

# Yarn
yarn add gd-ui-vite

# pnpm
pnpm install gd-ui-vite
```
如果您的网络环境不好，建议使用相关镜像服务[cnpm](https://github.com/cnpm/cnpm).

## Quick Start
### 完整引入
如果你对打包后的文件大小不是很在乎，那么使用完整倒入会更方便.
```ts
import { createApp } from "vue";
import GdUI from "gd-ui-vite/gd-ui.mjs";
import "gd-ui-vite/assets/css/entry.css";

createApp({
  template: `
    <GButton color="purple">按钮</GButton>
  `
})
.use(GdUI)
.mount("#app");
```

### 按需引入
gd-ui-vite提供了基于`ES MoDule`的开箱即用的`Tree Shaking`功能.
```ts
import { createApp } from "vue";
import GButton from "gd-ui-vite/Button/index.mjs";
import "gd-ui-vite/Button/assets/css/index.css";

createApp({
  template: `
    <GButton color="purple">按钮</GButton>
  `
})
.use(GButton)
.mount("#app");
```

## Starter Template 
我们也提供了简易的脚手架工具，用于快速使用gd-ui-vite.

1. 安装
```bash
# 全局安装create-gd-ui-app
# NPM
npm install -g create-gd-ui-app

# Yarn
yarn add -g create-gd-ui-app

# pnpm
pnpm install -g create-gd-ui-app
```

2. 进入需要构建的目录
3. 执行`create-gd-ui`
4. 选择对应模版即可

## Browser Support

Modern browsers and Internet Explorer 10+.
