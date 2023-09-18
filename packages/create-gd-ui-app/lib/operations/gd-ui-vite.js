import inquirer from "inquirer";
import { pull } from "../utils/pull.js";
import { log, checkName } from "../utils/common.js";
import { onPrompt } from "../utils/inquirer.js";
import { compile } from "../utils/compile.js";
import { shell } from "../utils/shell.js";

const clonePath = "https://github.com/gzdl-strive/gd-ui-app-template";
const variantOption = {
  "JavaScript": "main",
  "TypeScript": "template-ts"
};

export default async () => {
  const { name, dirName } = await onPrompt("input", {
    message: "请输入项目名称?",
    name: "name",
    default: "gd-ui-vite",
    callback: name => checkName(name),
  });

  const { variant } = await inquirer.prompt({
    type: "list",
    message: "请选择Variant",
    name: "variant",
    choices: Object.keys(variantOption), 
  });

  log(`🚗🚗🚗💨 即将创建项目: ${name}`);

  await pull(`direct:${clonePath}#${variantOption[variant]}`, dirName, { clone: true });

  compile({ name, variant }, `${dirName}/package.json`, `${dirName}/template/package.template.json`);

  // 执行git init命令
  await shell("git init", `${dirName}`);

  log(`
    🎉🎉创建完成:
    To get Start:
    ==================== 
    cd ${name}
    npm install
    npm run dev
    ==================== 
  `);
}