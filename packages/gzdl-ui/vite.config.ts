/// <reference types="vitest" />
import { defineConfig, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "unocss/vite";
import UnocssConfig from "./config/unocss";
import { presetUno, presetAttributify, presetIcons } from "unocss";
const path = require("path");

const rollupOptions = {
  // 将该模块保留在bundle之外，不让vue打包进组件库
  external: ["vue"],
  // 用于在umd/iife中，全局的某个模块在组件库中叫什么
  output: {
    globals: {
      vue: "Vue",
    },
    assetFileNames: "assets/[ext]/[name].[ext]",
  },
};

const config = {
  // 插件
  plugins: [
    vue(),
    vueJsx({}),
    UnocssConfig(),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
  ],
  // 开发服务器配置
  server: {
    open: true,
    port: 3000,
    hmr: {
      overlay: false,
    },
  },
  // 别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 添加库模式配置
  build: {
    rollupOptions,
    minify: false, // 混淆。（terser/esbuild）
    sourcemap: true, // 输出单独的sourcemap文件
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      // 生成的包的名字，在iife/umd包中，同一页上的其它脚本可以访问它
      name: "GzdlUI",
      // 文件名，输出文件名的前缀
      fileName: "gzdl-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
    outDir: "./dist",
  },
  test: {
    globals: true,
    environment: "happy-dom",
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
};

export { config };

export default defineConfig(config as UserConfig);
