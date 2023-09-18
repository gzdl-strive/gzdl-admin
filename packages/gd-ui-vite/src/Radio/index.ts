import { App } from "vue";
import Radio from "./Radio";
import "uno.css";

export { Radio };

export default {
  install(app: App) {
    app.component(Radio.name, Radio);
  },
};
