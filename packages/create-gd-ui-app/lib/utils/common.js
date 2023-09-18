import chalk from "chalk";
import fsExtra from "fs-extra";
import path from "path";
import { onPrompt } from "./inquirer.js";

/**
 * 打印方法
 * @param {string} content 需要打印的内容
 * @returns 无
 */
const log = content => (
  console.log(chalk.green(content))
);

/**
 * 校验目录名
 * @param {string} name 
 * @returns 成功返回目录名以及路径
 */
const checkName = async (name) => {
  const dirName = path.join(process.cwd(), name);
  
  if (fsExtra.existsSync(dirName)) {
    return onPrompt("input", {
      message: "该目录已存在，请输入新的目录名: ",
      name: "name",
      callback: name => checkName(name),
    });
  } else {
    return {
      name,
      dirName
    }
  }
}

/**
 * 等待给定时间
 * @param {number} time 
 * @returns 
 */
const sleep = (time) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  })
}

export {
  log,
  checkName,
  sleep
}
