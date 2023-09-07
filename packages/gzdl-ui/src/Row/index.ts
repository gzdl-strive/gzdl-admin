import Row from "./Row";
import { App } from "vue";
import "uno.css";

export { Row };

export default {
  install(app: App) {
    app.component(Row.name, Row);
  },
};
