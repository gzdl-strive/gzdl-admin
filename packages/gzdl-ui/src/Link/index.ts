import Link from "./Link";
import { App } from "vue";
import "uno.css";

export { Link };

export default {
  install(app: App) {
    app.component(Link.name, Link);
  },
};
