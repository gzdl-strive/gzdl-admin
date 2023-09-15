import { createApp } from "vue/dist/vue.esm-bundler";
import GButton from "gd-ui-vite/dist/Button/index.mjs";
import "gd-ui-vite/dist/Button/assets/css/index.css";

createApp({
  template: `
    <GButton color="purple">111</GButton>
  `
}).use(GButton).mount("#app");