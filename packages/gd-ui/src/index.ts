import { createApp } from "vue";
import GdUI from "./entry";
import App from "./App.vue";
import "uno.css";

createApp(App).use(GdUI).mount("#app");
