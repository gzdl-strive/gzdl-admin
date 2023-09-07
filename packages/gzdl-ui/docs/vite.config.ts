import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "../config/unocss";

export default defineConfig({
  plugins: [vueJsx(), Unocss()],
  server: {
    port: 3001,
    open: true,
  },
});
