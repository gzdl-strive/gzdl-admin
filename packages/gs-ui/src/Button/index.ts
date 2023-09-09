import Button from "./Button";
import { App } from "vue";
import "uno.css";

export { Button };

export default {
  install(app: App) {
    app.component(Button.name, Button);
  },
};
