import handlebars from "handlebars";
import fse from "fs-extra";
import { log } from "./common.js";

const compile = (meta, filePath, templatePath) => {
  if (fse.existsSync(templatePath)) {
    const content = fse.readFileSync(templatePath).toString();
    const result = handlebars.compile(content)(meta);
    fse.writeFileSync(filePath, result);
    log(`🥂 ${filePath}修改成功`);
  } else {
    log(`❌ 未找到模版文件${templatePath}`);
  }
}

export {
  compile,
}