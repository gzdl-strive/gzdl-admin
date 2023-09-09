import Input from "./Input";
import { App } from "vue";
import "uno.css";

export { Input };

export default {
  install(app: App) {
    app.component(Input.name, Input);
  },
};
