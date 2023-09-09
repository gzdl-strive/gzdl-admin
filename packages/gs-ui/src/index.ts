import { createApp } from "vue";
import GsUI from "./entry";
import App from "./App.vue";
import "uno.css";

createApp(App).use(GsUI).mount("#app");
