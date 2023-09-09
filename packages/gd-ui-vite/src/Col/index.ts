import Col from "./Col";
import { App } from "vue";
import "uno.css";

export { Col };

export default {
  install(app: App) {
    app.component(Col.name, Col);
  },
};
