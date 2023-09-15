import { createApp } from "vue/dist/vue.esm-bundler.js";
import GdUI, { JSXButton, SFCButton } from "gd-ui-vite/dist/gd-ui.mjs";
import "gd-ui-vite/dist/assets/css/entry.css";

createApp({
  template: `
    <JSXButton></JSXButton>
    <SFCButton></SFCButton>
    <br />
    <br />
    <GButton color="purple">111</GButton>
    <GInput placeholder="用户名" clearable />
  `
}).use(GdUI).mount("#app");