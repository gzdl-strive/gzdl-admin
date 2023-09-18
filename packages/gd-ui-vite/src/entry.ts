import { App } from "vue";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./jsxButton";
import { Button } from "./Button";
import { Link } from "./Link";
import { Row } from "./Row";
import { Col } from "./Col";
import { Input } from "./Input";
import { InputNumber } from "./InputNumber";
import { Radio } from "./Radio";
import "uno.css";

// 导出单独组件
export { SFCButton, JSXButton, Button, Link, Row, Col };

// 编写一个插件，实现一个install方法，导出全部组件
export default {
  install(app: App): void {
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
    app.component(Button.name, Button);
    app.component(Link.name, Link);
    app.component(Row.name, Row);
    app.component(Col.name, Col);
    app.component(Input.name, Input);
    app.component(InputNumber.name, InputNumber);
    app.component(Radio.name, Radio);
  },
};
