import { App } from "vue";
import InputNumber from "./InputNumber";
import "uno.css";

export { InputNumber };

export default {
  install(app: App) {
    app.component(InputNumber.name, InputNumber);
  },
};
